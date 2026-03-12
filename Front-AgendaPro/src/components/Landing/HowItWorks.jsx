function HowItWorks() {
  return (
    <section className="py-20" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Cómo funciona
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                En solo tres pasos tendrás tu cita confirmada y lista para ser atendida.
              </p>
            </div>

            <div className="flex flex-col gap-10">

              {/* Paso 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Busca tu especialista</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Filtra por categoría, ubicación o disponibilidad para encontrar al profesional ideal.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Selecciona horario</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Elige el día y la hora que mejor se adapte a tu ritmo de vida de forma visual.
                  </p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Confirma tu cita</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Recibe una confirmación inmediata y añade el evento automáticamente a tu calendario personal.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Imagen */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CDkGBFcfV1v6WXMHKVPrFvy3zpo5Emf1h2gqRaUeXNgtxwlkQGHNEvDGvFw1o4FHUqdBpjcsuc5zfTMHkmKZdogG9KW0gLyEtJwOvgV0BTy52uYipEB93GljsbghIiag7NuMd6sFcW7wpOE6L-lbfZYbOuXtN-gAe3DKmQk44J9EjtKnT3DxnuTwH59SxKI3JvmuidTOdg60tHVXcOfhAIq2n-TbD2Pm_DqV8nUrYNskdLJcgy_6xLUWyWKLRtHuxVp9hPiqytfA"
              alt="Modern analytics and calendar interface on a laptop"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;