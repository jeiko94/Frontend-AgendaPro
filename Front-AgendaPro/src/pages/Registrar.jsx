import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Landing/Footer";

import registrarImg from "../assets/registrar.jpg";

function Register() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idRol, setIdRol] = useState(2);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/Auth/registrar", {
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

        <div className="min-h-screen flex flex-col bg-slate-50">

            <Navbar />

            {/* Contenido */}
            <div className="flex-1 flex items-center justify-center px-4">

                <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">

                    {/* Lado izquierdo */}
                    <div className="bg-primary text-white flex flex-col items-center justify-center p-12 space-y-6">

                        <img
                            src={registrarImg}
                            alt="Registro AgendaPro"
                            className="w-80 rounded-xl shadow-lg"
                        />

                        <h2 className="text-3xl font-bold">
                            AgendaPro
                        </h2>

                        <p className="text-white/80 text-center">
                            Crea tu cuenta y comienza a gestionar tus citas fácilmente
                        </p>

                    </div>

                    {/* Lado derecho */}
                    <div className="p-10">

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Crear cuenta
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="flex items-center border rounded-lg px-4 py-3">
                                <FaUser className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    className="w-full outline-none"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center border rounded-lg px-4 py-3">
                                <FaEnvelope className="text-slate-400 mr-3" />
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="w-full outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center border rounded-lg px-4 py-3">
                                <FaLock className="text-slate-400 mr-3" />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="w-full outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Rol */}
                            <div className="border rounded-lg px-4 py-3">
                                <select
                                    className="w-full outline-none"
                                    value={idRol}
                                    onChange={(e) => setIdRol(parseInt(e.target.value))}
                                >
                                    <option value={1}>Administrador</option>
                                    <option value={2}>Usuario</option>
                                </select>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                            >
                                Registrarse
                            </button>

                            <p className="text-sm text-center text-slate-600">

                                ¿Ya tienes cuenta?{" "}

                                <Link
                                    to="/login"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Iniciar sesión
                                </Link>

                            </p>

                        </form>

                    </div>

                </div>

            </div>

            <Footer />

        </div>

    );

}

export default Register;