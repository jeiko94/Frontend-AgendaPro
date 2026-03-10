import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Workspace from "../pages/Workspace";

import Login from "../pages/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workspace" element={<Workspace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;