import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">

            <h2 className="text-3xl md:text-5xl font-black">
              ¿Listo para simplificar tu agenda?
            </h2>

            <p className="text-white/80 text-lg">
              Únete a miles de profesionales y pacientes que ya utilizan AgendaPro.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                to="/registrar"
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Empezar ahora
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;