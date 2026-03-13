// src/components/Landing/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                Agenda tus citas de manera <span className="text-primary">fácil y rápida</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg">
                La plataforma líder para gestionar tus citas médicas y profesionales en un solo lugar.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/25" to="/login">
                Agendar cita
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4AskV-0m2kjEXaurujlEEl5GppGjLSRjJBVPwYkt0jSrpM25vzVcFnHtWdUX4vMBw0sGk7Ysx-GTshBgx9A06qcweZ5b-MiKb2R7QtUa0cjtcs2ddM-gYtLhW1YQtrO3KbgdTKAqn_GCtl8OY_wYvWccxWrgk7vjPkM4UKe57vdHm5jJKueNNDrt4eZwtT_Gpjtj1c_H_EciGwlMBk_hUfyDnNsPXovEf8Wfwsq_b7lpiVVTrosFU98B5wHAe65PSuuzjMcAA2zi" alt="Doctor profesional" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;