import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { login } from "../services/authService";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(email, password);

            localStorage.setItem("token", response.token);

            navigate("/workspace");

        } catch {

            alert("Usuario o contraseña incorrectos");

        }

    }

    return (

        <div className="login-page">

            <div className="login-wrapper">

                {/* lado izquierdo */}
                <div className="login-image">

                    <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" />

                    <h2>Agenda Médica</h2>

                    <p>Sistema de gestión de citas médicas</p>

                </div>

                {/* lado derecho */}
                <div className="login-card">

                    <h2>LOGIN</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <FaUser />
                            <input
                                type="email"
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <FaLock />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="login-btn">
                            Iniciar sesión
                        </button>

                        <p className="login-registrar">

                            ¿No tienes cuenta?

                            <Link to="/registrar">
                                Registrarse
                            </Link>

                        </p>

                    </form>

                </div>

            </div>

        </div>

    )

}

export default Login;