import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";
import Workspace from "../pages/Workspace";
import Usuarios from "../pages/Usuarios";
import Especialistas from "../pages/Especialistas";
import Horarios from "../pages/Horarios";
import Citas from "../pages/Citas";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />

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