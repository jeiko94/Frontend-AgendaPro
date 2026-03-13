import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { login } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Landing/Footer";

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
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Agenda médica"
              className="w-32"
            />

            <h2 className="text-3xl font-bold">
              AgendaPro
            </h2>

            <p className="text-white/80 text-center">
              Sistema inteligente para gestionar tus citas médicas
            </p>

          </div>

          {/* Lado derecho */}
          <div className="p-10">

            <h2 className="text-2xl font-bold mb-6 text-center">
              Iniciar sesión
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="flex items-center border rounded-lg px-4 py-3">
                <FaUser className="text-slate-400 mr-3" />
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

              <button
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Iniciar sesión
              </button>

              <p className="text-sm text-center text-slate-600">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/registrar"
                  className="text-primary font-semibold hover:underline"
                >
                  Registrarse
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

export default Login;