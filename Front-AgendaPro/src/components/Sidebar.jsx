import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    // cerración de sesión con confirmación
    
    const logout = () => {

        const confirmLogout = window.confirm("¿Seguro que deseas cerrar sesión?");

        if (confirmLogout) {

            localStorage.removeItem("token");

            navigate("/");

        }

    };

    return (

        <div className="sidebar">

            <h2 className="logo">Agenda</h2>

            <nav>

                <Link to="/workspace">Dashboard</Link>

                <Link to="/usuarios">Usuarios</Link>

                <Link to="/especialistas">Especialistas</Link>

                <Link to="/horarios">Horarios</Link>

                <Link to="/citas">Citas</Link>

            </nav>

            <button className="logout-btn" onClick={logout}>
                Cerrar sesión
            </button>

        </div>

    )

}

export default Sidebar;