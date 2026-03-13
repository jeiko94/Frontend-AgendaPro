import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-primary font-bold text-xl"
          >
            AgendaPro
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/#inicio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Inicio
            </Link>

            <Link
              to="/#beneficios"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Beneficios
            </Link>

            <Link
              to="/#especialistas"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Especialistas
            </Link>

            <Link
              to="/login"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Login
            </Link>

            <Link
              to="/registrar"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition"
            >
              Crear Cuenta
            </Link>

          </nav>

        </div>

      </div>
    </header>
  );
}

export default Navbar;