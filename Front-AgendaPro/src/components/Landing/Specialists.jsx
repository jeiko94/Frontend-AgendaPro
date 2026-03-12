function Specialists() {
  return (
    <section className="py-20 bg-slate-50" id="especialistas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Especialistas destacados
            </h2>
            <p className="text-slate-600">
              Conoce a los profesionales mejor valorados de nuestra red.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Specialist 1 */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTZvfD3jalyJFRVHDpRHVjySMXjOupY7awdSyHeZv5xYpHRLAY3Ny16C4sCdpoCf-Jyps1RpeyxcCI9hULaTW5ENKAIHWHMI-zV3X2g4Irrg8vcQRWNd7b9Rdqrb9Xhso6VwwHJsKC40DRrHpyxESvJgm6VTOiGgnrUfoVdAiDG1J8moiHsZyiwuSZgDrpTbo_54U4HGgaPGpEuZ7pTYd3pGTv1tzfBu8EnJeaalQ-DyeXtVOZz_qMXUIph0eKRYbjJ3KFF5L91FAG"
                alt="Dra. Elena Ramos"
              />
            </div>

            <div className="p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Cardiología
              </p>

              <h4 className="text-lg font-bold mb-1">
                Dra. Elena Ramos
              </h4>

              <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Reservar Cita
              </button>
            </div>
          </div>

          {/* Specialist 2 */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYr6vS2TQ80ifEz_mro-Ap-JNhW_GB1WD0o8qIqGJ_RXlOawDxnUx4D5sTWhpD7QCvboby4wuBEM7Y9YtBE9AZjn6wixmqg0Vs1GDDUpC5rvXE3JuN5OHmzKK0fHIuzLtVluGaCzY-M2blGCUPGB57omPYoO6U3A5rNnU7AdYA1dkQSLbIz99VSJikux5I4mw8IewrGbQklWXM8BVb5MC9NNhVTTpVzJWnQMhgCNLfIW74scl9jN5vo98fzxsrJuKmeVf0oMnLXzVM"
                alt="Dr Carlos Mendoza"
              />
            </div>

            <div className="p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Psicología
              </p>

              <h4 className="text-lg font-bold mb-1">
                Dr. Carlos Mendoza
              </h4>

              <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Reservar Cita
              </button>
            </div>
          </div>

          {/* Specialist 3 */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5aUzVf1p-T_YhWtdbneRVlHIBZeQKfwkdQkPKNiCUndqzvEFJkCFOmmqfFejJSOchSR3qKnKjMwMs34Iqtauc4Rkgr75_CB2emakoyODA-9phiOeSfgFuWEG3G6V50YxzEaTB21PMJx91NkyxOTU19sNOOokJy-v8eVZcDa17EU_whizcSIwvbzLYQcI-uaPCbnlaeKvFsM7lpvvFNi00JulpPRLtE5uIZN4B8t0tt4Gz3hTaSyvdXMQwXqHsvzO9iIJxSxpsTPDE"
                alt="Ana Sofía Ruiz"
              />
            </div>

            <div className="p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Nutrición
              </p>

              <h4 className="text-lg font-bold mb-1">
                Mta. Ana Sofía Ruiz
              </h4>

              <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Reservar Cita
              </button>
            </div>
          </div>

          {/* Specialist 4 */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuYjlrutkfXPADSEZd9aG51bAmyU0lGi8tyAx8ZC0n3xgfcarjpCD6n_Oc3dvRdq3nC3ClFXOwQXkl-5OYbIuF_lp5ALNjqg5MsTGkb-ihuN22PywRt4rOuLl4BiILIutlIG8uRvsRe3rzzuP8mHH5b1qMFbkJ5bvqYmdqdTOQKUvqPEk1_Ks30sU-Y256eKsa10CM0w69D8Qf9qF3BkpZMPcXJS33jkRVffnq1-pmxdPsTEJypjDSermAqybBewinKGR8iitRhbnd"
                alt="Dr Roberto Gómez"
              />
            </div>

            <div className="p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Odontología
              </p>

              <h4 className="text-lg font-bold mb-1">
                Dra. Patricia Gómez
              </h4>

              <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Reservar Cita
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Specialists;