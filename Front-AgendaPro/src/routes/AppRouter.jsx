import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Workspace from "../pages/Workspace";
import Login from "../pages/Login";
import Usuarios from "../pages/Usuarios";
import Especialistas from "../pages/Especialistas";
import Horarios from "../pages/Horarios";
import Citas from "../pages/Citas";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/citas" element={<Citas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

//hola