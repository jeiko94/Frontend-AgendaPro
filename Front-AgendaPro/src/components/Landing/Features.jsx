function Features() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Nuestros Beneficios
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Optimiza tu tiempo con nuestras herramientas diseñadas para profesionales y clientes exigentes.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">schedule</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Ahorro de Tiempo</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Reduce el ausentismo y organiza tu agenda de manera eficiente con sincronización en tiempo real.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">notifications_active</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Recordatorios Automáticos</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Notificaciones inteligentes vía SMS y Email para que ni tú ni tus clientes pierdan una cita importante.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">event_available</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Gestión 24/7</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Permite que tus clientes reserven en cualquier momento del día, incluso fuera del horario comercial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;