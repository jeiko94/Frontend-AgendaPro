import Navbar from "../components/Navbar";
import Footer from "../components/Landing/Footer";

function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero container grid-12">

          <div className="hero-text">
            <h1>
              Gestiona tus citas médicas de forma
              <span> rápida y sencilla</span>
            </h1>

            <p>
              AgendaPro permite a especialistas y pacientes
              organizar citas, horarios y recordatorios
              desde una plataforma moderna.
            </p>

            <div className="hero-buttons">
              <a href="/registrar" className="btn-primary">
                Comenzar ahora
              </a>

              <a href="#beneficios" className="btn-secondary">
                Ver beneficios
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img class="w-full h-full object-cover" data-alt="Professional doctor in a modern office consultation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4AskV-0m2kjEXaurujlEEl5GppGjLSRjJBVPwYkt0jSrpM25vzVcFnHtWdUX4vMBw0sGk7Ysx-GTshBgx9A06qcweZ5b-MiKb2R7QtUa0cjtcs2ddM-gYtLhW1YQtrO3KbgdTKAqn_GCtl8OY_wYvWccxWrgk7vjPkM4UKe57vdHm5jJKueNNDrt4eZwtT_Gpjtj1c_H_EciGwlMBk_hUfyDnNsPXovEf8Wfwsq_b7lpiVVTrosFU98B5wHAe65PSuuzjMcAA2zi"/>
          </div>

        </section>

        {/* COMO FUNCIONA */}
        <section id="como" className="section bg-light">

          <div className="container">

            <h2 className="section-title">
              Cómo funciona
            </h2>

            <div className="features-grid">

              <div className="feature-card">
                <h3>Registro rápido</h3>
                <p>
                  Crea tu cuenta como especialista o paciente
                  en menos de un minuto.
                </p>
              </div>

              <div className="feature-card">
                <h3>Agenda inteligente</h3>
                <p>
                  Organiza tus horarios y disponibilidad
                  fácilmente.
                </p>
              </div>

              <div className="feature-card">
                <h3>Gestión de citas</h3>
                <p>
                  Agenda, modifica o cancela citas
                  con total facilidad.
                </p>
              </div>

              <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img class="w-full h-full object-cover" data-alt="Modern analytics and calendar interface on a laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CDkGBFcfV1v6WXMHKVPrFvy3zpo5Emf1h2gqRaUeXNgtxwlkQGHNEvDGvFw1o4FHUqdBpjcsuc5zfTMHkmKZdogG9KW0gLyEtJwOvgV0BTy52uYipEB93GljsbghIiag7NuMd6sFcW7wpOE6L-lbfZYbOuXtN-gAe3DKmQk44J9EjtKnT3DxnuTwH59SxKI3JvmuidTOdg60tHVXcOfhAIq2n-TbD2Pm_DqV8nUrYNskdLJcgy_6xLUWyWKLRtHuxVp9hPiqytfA"/>
            </div>

            </div>

          </div>

        </section>


        {/* BENEFICIOS */}
        <section id="beneficios" className="section">

          <div className="container">

            <h2 className="section-title">
              Beneficios de AgendaPro
            </h2>

            <div className="features-grid">

              <div className="feature-card">
                <h3>Ahorra tiempo</h3>
                <p>
                  Automatiza la gestión de citas y evita
                  procesos manuales.
                </p>
              </div>

              <div className="feature-card">
                <h3>Mejor organización</h3>
                <p>
                  Mantén un control claro de tus
                  horarios y pacientes.
                </p>
              </div>

              <div className="feature-card">
                <h3>Acceso desde cualquier lugar</h3>
                <p>
                  Usa la plataforma desde tu
                  computadora o móvil.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ESTADISTICAS */}
        <section className="stats">

          <div className="stat">
            <h3>+500</h3>
            <p>Usuarios activos</p>
          </div>

          <div className="stat">
            <h3>+1200</h3>
            <p>Citas gestionadas</p>
          </div>

          <div className="stat">
            <h3>98%</h3>
            <p>Satisfacción de usuarios</p>
          </div>

        </section>


        {/* CTA FINAL */}
        <section className="cta">

          <h2>
            Empieza a organizar tus citas hoy mismo
          </h2>

          <a href="/registrar" className="btn-primary">
            Crear cuenta
          </a>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;