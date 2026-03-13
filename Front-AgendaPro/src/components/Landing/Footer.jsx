import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Logo + descripción */}
          <div className="md:col-span-4 space-y-6">

            <div className="flex items-center gap-2">

              <div className="text-primary">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <span className="text-xl font-bold tracking-tight text-slate-900">
                AgendaPro
              </span>

            </div>

            <p className="text-slate-500">
              La solución integral para la gestión de citas y tiempo, ayudando a
              profesionales a crecer y a clientes a encontrar el mejor servicio.
            </p>

            {/* Redes */}
            <div className="flex gap-4">

              <a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  social_leaderboard
                </span>
              </a>

              <a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  camera
                </span>
              </a>

              <a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </a>

            </div>

          </div>

          {/* Plataforma */}
          <div className="md:col-span-2 space-y-6">

            <h5 className="font-bold">Plataforma</h5>

            <ul className="space-y-4 text-slate-500">

              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/#beneficios"
                  className="hover:text-primary transition-colors"
                >
                  Cómo funciona
                </Link>
              </li>

              <li>
                <Link
                  to="/#especialistas"
                  className="hover:text-primary transition-colors"
                >
                  Especialistas
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition-colors">
                  Precios
                </Link>
              </li>

            </ul>

          </div>

          {/* Soporte */}
          <div className="md:col-span-2 space-y-6">

            <h5 className="font-bold">Soporte</h5>

            <ul className="space-y-4 text-slate-500">

              <li>
                <Link className="hover:text-primary transition-colors">
                  Ayuda
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition-colors">
                  Privacidad
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition-colors">
                  Términos
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>

            </ul>

          </div>

          {/* Contacto */}
          <div className="md:col-span-4 space-y-6">

            <h5 className="font-bold">Contacto</h5>

            <ul className="space-y-4 text-slate-500">

              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                contacto@agendapro.com
              </li>

              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  phone
                </span>
                +34 900 123 456
              </li>

              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                Av. de la Innovación 45, Madrid
              </li>

            </ul>

          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© 2024 AgendaPro. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;