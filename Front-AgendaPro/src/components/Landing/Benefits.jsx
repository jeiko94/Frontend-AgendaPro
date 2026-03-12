// src/components/Landing/Benefits.jsx

function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO Y BENEFICIOS */}
          <div>

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Beneficios
              </h2>

              <p className="text-slate-600">
                Optimiza tu tiempo con nuestras herramientas diseñadas para
                profesionales y clientes exigentes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    schedule
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  Ahorro de Tiempo
                </h3>

                <p className="text-slate-600 text-sm">
                  Reduce el ausentismo y organiza tu agenda de manera eficiente.
                </p>
              </div>


              {/* CARD 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    notifications_active
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  Recordatorios Automáticos
                </h3>

                <p className="text-slate-600 text-sm">
                  Notificaciones inteligentes vía SMS y Email.
                </p>
              </div>


              {/* CARD 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    event_available
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  Gestión 24/7
                </h3>

                <p className="text-slate-600 text-sm">
                  Tus clientes pueden reservar en cualquier momento, incluso fuera de horario.
                </p>
              </div>

            </div>

          </div>


          {/* IMAGEN A LA DERECHA */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="Modern analytics and calendar interface on a laptop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CDkGBFcfV1v6WXMHKVPrFvy3zpo5Emf1h2gqRaUeXNgtxwlkQGHNEvDGvFw1o4FHUqdBpjcsuc5zfTMHkmKZdogG9KW0gLyEtJwOvgV0BTy52uYipEB93GljsbghIiag7NuMd6sFcW7wpOE6L-lbfZYbOuXtN-gAe3DKmQk44J9EjtKnT3DxnuTwH59SxKI3JvmuidTOdg60tHVXcOfhAIq2n-TbD2Pm_DqV8nUrYNskdLJcgy_6xLUWyWKLRtHuxVp9hPiqytfA"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Benefits;