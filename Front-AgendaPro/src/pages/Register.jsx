import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idRol, setIdRol] = useState(1);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/Auth/register", {
                nombre,
                email,
                password,
                idRol
            });

            alert("Usuario registrado correctamente");

            navigate("/workspace");

        } catch (error) {

            console.error(error);
            alert("Error al registrar usuario");

        }

    };

    return (

        <div className="login-container">

            <div className="login-box">

                <Link to="/" className="back-btn">
                    ← Volver al login
                </Link>

                <h2>REGISTRAR</h2>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            placeholder="Correo"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaLock />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* LISTA DESPLEGABLE */}
                    <div className="input-group">

                        <select
                            value={idRol}
                            onChange={(e) => setIdRol(parseInt(e.target.value))}
                            style={{
                                width: "100%",
                                background: "transparent",
                                border: "none",
                                color: "white",
                                outline: "none"
                            }}
                        >

                            <option value={1}>Admin</option>
                            <option value={2}>Usuario</option>

                        </select>

                    </div>

                    <button className="login-btn">
                        Registrar
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;

//hola