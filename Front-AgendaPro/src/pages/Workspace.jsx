import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Workspace() {

    const [openModal, setOpenModal] = useState(false);
    const [citas, setCitas] = useState([]);


    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [estado, setEstado] = useState("Pendiente");

    const [confirmando, setConfirmando] = useState(null);
    const [editandoId, setEditandoId] = useState(null);

    /* ESPECIALISTAS */

    const [especialistas, setEspecialistas] = useState([]);
    const [especialistasFiltrados, setEspecialistasFiltrados] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [especialista, setEspecialista] = useState("");

    useEffect(() => {

        const cargarEspecialistas = async () => {

            try {

                const response = await api.get("/Especialistas");

                setEspecialistas(response.data);

                /* obtener especialidades únicas */

                const especialidadesUnicas = [
                    ...new Set(response.data.map(e => e.especialidad))
                ];

                setEspecialidades(especialidadesUnicas);

            } catch (error) {

                console.error("Error cargando especialistas", error);

            }

        };

        cargarEspecialistas();

    }, []);

    const seleccionarEspecialidad = (especialidadSeleccionada) => {

        setTitulo(especialidadSeleccionada);

        const filtrados = especialistas.filter(
            e => e.especialidad === especialidadSeleccionada
        );

        setEspecialistasFiltrados(filtrados);

        setEspecialista("");

    };

    // CONTADORES

    const confirmadas = citas.filter(c => c.estado === "Confirmada").length;
    const pendientes = citas.filter(c => c.estado === "Pendiente").length;
    const completadas = citas.filter(c => c.estado === "Completada").length;
    const canceladas = citas.filter(c => c.estado === "Cancelada").length;

    // bloques de horarios 

    const [horarios, setHorarios] = useState([]);
    const [bloques, setBloques] = useState([]);

    const cargarHorarios = async (idEspecialista) => {

        try {

            const response = await api.get(`/Horarios/especialista/${idEspecialista}`);

            setHorarios(response.data);

            if (response.data.length > 0) {

                cargarBloques(response.data[0].idHorarios);

            }

        } catch (error) {

            console.error("Error cargando horarios", error);

        }

    };

    const cargarBloques = async (idHorario) => {

        try {

            const response = await api.get(`/BloquesHorario/horario/${idHorario}`);

            const disponibles = response.data.filter(b => b.disponibilidad === true);

            setBloques(disponibles);

        } catch (error) {

            console.error("Error cargando bloques", error);

        }

    };


    // GUARDAR CITA

    const guardarCita = (e) => {

        e.preventDefault();

        // buscar el especialista seleccionado
        const especialistaSeleccionado = especialistas.find(
            e => e.idEspecialista == especialista
        );

        if (editandoId) {

            setCitas(

                citas.map(c =>
                    c.id === editandoId
                        ? {
                            ...c,
                            titulo,
                            especialistaId: especialista,
                            especialistaNombre: especialistaSeleccionado?.nombre,
                            fecha,
                            hora,
                            estado
                        }
                        : c
                )

            );

            setEditandoId(null);

        } else {

            const nuevaCita = {

                id: Date.now(),
                titulo,
                especialistaId: especialista,
                especialistaNombre: especialistaSeleccionado?.nombre,
                fecha,
                hora,
                estado

            };

            setCitas([...citas, nuevaCita]);

        }

        setOpenModal(false);

    };


    // CANCELAR
    const cancelarCita = (id) => {

        setCitas(

            citas.map(c =>
                c.id === id ? { ...c, estado: "Cancelada" } : c
            )

        );

        setConfirmando(null);

    };

    // EDITAR

    const editarCita = (cita) => {

        setTitulo(cita.titulo);
        setEspecialista(cita.especialista);
        setFecha(cita.fecha);
        setHora(cita.hora);
        setEstado(cita.estado);

        setEditandoId(cita.id);

        setOpenModal(true);

    };


    return (

        <div className="workspace">

            <Sidebar />

            <div className="workspace-content">

                {/* HEADER */}

                <div className="header">

                    <div className="header-left">

                        <div className="logo-icon">📅</div>

                        <div>

                            <h1>Mis Citas</h1>

                            <p>Gestiona todas tus citas en un solo lugar</p>

                        </div>

                    </div>

                    <div className="header-user">

                        <div className="avatar">U</div>

                        <span>Usuario</span>

                    </div>

                </div>


                {/* STATS */}

                <div className="stats-bar">

                    <div className="stat-pill">

                        <span className="dot green"></span>

                        Confirmadas: {confirmadas}

                    </div>

                    <div className="stat-pill">

                        <span className="dot orange"></span>

                        Pendientes: {pendientes}

                    </div>

                    <div className="stat-pill">

                        <span className="dot gray"></span>

                        Completadas: {completadas}

                    </div>

                    <div className="stat-pill">

                        <span className="dot red"></span>

                        Canceladas: {canceladas}

                    </div>

                    <button className="btn-new" onClick={() => setOpenModal(true)}>

                        + Nueva Cita

                    </button>

                </div>

                {citas.length === 0 && (

                    <div className="empty-state">

                        <div className="empty-icon">

                            📅

                        </div>

                        <h3>No tienes citas aún</h3>

                        <p>Comienza agregando tu primera cita</p>

                        <button
                            className="btn-new"
                            onClick={() => setOpenModal(true)}
                        >

                            + Agregar Primera Cita

                        </button>

                    </div>

                )}


                {/* CARDS */}

                <div className="appointments-grid">

                    {citas.map((cita) => (

                        <div key={cita.id} className="card">

                            <div className="card-top"></div>

                            <div className="card-body">

                                <div className="card-header">

                                    <span className="status-badge">
                                        ● {cita.estado}
                                    </span>

                                    <div className="card-actions">

                                        <button
                                            className="icon-btn"
                                            onClick={() => editarCita(cita)}
                                            title="Editar"
                                        >
                                            ✏️
                                        </button>

                                    </div>

                                </div>

                                <h3>{cita.titulo}</h3>

                                <p>Especialista: {cita.especialistaNombre}</p>

                                <div className="card-meta">

                                    <span>📅 {cita.fecha}</span>

                                    <span>⏰ {cita.hora}</span>

                                </div>

                            </div>

                            <div className="card-footer">

                                {cita.estado !== "Cancelada" && (

                                    <div className="cancel-container">

                                        <button
                                            className="btn-cancel-cita"
                                            onClick={() => setConfirmando(cita.id)}
                                        >

                                            Cancelar Cita

                                        </button>

                                    </div>

                                )}

                                {confirmando === cita.id && (

                                    <div className="confirm-row">

                                        <button
                                            className="btn-confirm"
                                            onClick={() => cancelarCita(cita.id)}
                                        >

                                            ✓ Confirmar

                                        </button>

                                        <button
                                            className="btn-back"
                                            onClick={() => setConfirmando(null)}
                                        >

                                            Volver

                                        </button>

                                    </div>

                                )}

                            </div>

                        </div>

                    ))}

                </div>


                {/* MODAL */}

                {openModal && (

                    <div className="modal-overlay">

                        <div className="modal">

                            <h2>Nueva Cita</h2>

                            <form onSubmit={guardarCita}>

                                <div className="form-group">

                                    <label>Título</label>

                                    <select
                                        value={titulo}
                                        onChange={(e) => seleccionarEspecialidad(e.target.value)}
                                        required
                                    >

                                        <option value="">Seleccionar</option>

                                        {especialidades.map((esp, index) => (

                                            <option key={index} value={esp}>

                                                {esp}

                                            </option>

                                        ))}

                                    </select>
                                </div>


                                <div className="form-group">

                                    <label>Especialista</label>

                                    <select
                                        value={especialista}
                                        onChange={(e) => {

                                            setEspecialista(e.target.value);

                                            cargarHorarios(e.target.value);

                                        }}
                                    >

                                        <option value="">Seleccionar</option>

                                        {especialistasFiltrados.map((esp) => (

                                            <option
                                                key={esp.idEspecialista}
                                                value={esp.idEspecialista}
                                            >

                                                {esp.nombre}

                                            </option>

                                        ))}

                                    </select>

                                </div>


                                <div className="form-group">

                                    <label>Fecha</label>

                                    <input
                                        type="date"
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label>Hora</label>

                                    <select
                                        value={hora}
                                        onChange={(e) => setHora(e.target.value)}
                                        required
                                    >

                                        <option value="">Seleccionar hora</option>

                                        {bloques.map((bloque) => (

                                            <option
                                                key={bloque.idBloqueHorario}
                                                value={bloque.horaInicio}
                                            >

                                                {bloque.horaInicio} - {bloque.horaFin}

                                            </option>

                                        ))}

                                    </select>
                                </div>


                                <div className="form-group">

                                    <label>Estado</label>

                                    <select
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    >

                                        <option>Pendiente</option>

                                        <option>Confirmada</option>

                                        <option>Completada</option>

                                        <option>Cancelada</option>

                                    </select>

                                </div>


                                <div className="modal-actions">

                                    <button
                                        type="button"
                                        className="btn-cancel"
                                        onClick={() => setOpenModal(false)}
                                    >

                                        Cancelar

                                    </button>

                                    <button
                                        type="submit"
                                        className="btn-save"
                                    >

                                        Guardar Cita

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

            </div>

        </div>

    )

}

export default Workspace;