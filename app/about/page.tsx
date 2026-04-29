import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PhysioCare Noida",
  description:
    "PhysioCare is a trusted physiotherapy clinic located in Surajpur, Noida providing expert treatment for pain relief and rehabilitation.",
};

export default function AboutPage() {
  return (
    <section className="relative min-h-screen py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* --- BG DECORATION (NO JS REQUIRED) --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* --- HEADING WITH FADE-IN ANIMATION --- */}
        <div className="text-center mb-20 animate-[fadeIn_1s_ease-out]">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Expert Healthcare</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-6 text-slate-900">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">PhysioCare</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Leading the way in modern physiotherapy with professional techniques and a patient-first approach.
          </p>
        </div>

        {/* --- MAIN GLASSIC GRID --- */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: WHO WE ARE (GLASS BOX) */}
          <div className="md:col-span-7 bg-white/60 backdrop-blur-2xl border border-white/80 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] animate-[slideUp_0.8s_ease-out]">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-4">
              <span className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg shadow-blue-200">
                i
              </span>
              Who We Are
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                PhysioCare is a <span className="text-blue-700 font-medium">premier physiotherapy clinic</span> based in Surajpur, Noida. We are dedicated to providing world-class rehabilitation services.
              </p>
              
              <div className="bg-blue-600/5 p-8 rounded-[2rem] border-l-4 border-blue-600 italic">
                "Our mission is to help patients recover faster and live a pain-free life through advanced medical solutions."
              </div>
              
              <p>
                Whether it's sports injuries, chronic back pain, or post-surgery recovery, our team ensures you get back to your best self.
              </p>
            </div>
          </div>

          {/* RIGHT: CLINIC INFO (MODERN GRADIENT BOX) */}
          <div className="md:col-span-5 relative group animate-[slideUp_1s_ease-out]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative h-full bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden border border-slate-800 shadow-2xl">
              {/* Decorative Circle inside card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
                Quick <span className="text-blue-400">Details</span>
              </h3>

              <ul className="space-y-10">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-white/10">📍</div>
                  <div>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Clinic Address</p>
                    <p className="text-slate-200 font-medium">Surajpur, Noida, Uttar Pradesh</p>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-white/10">📞</div>
                  <div>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Contact Number</p>
                    <p className="text-white font-bold text-2xl tracking-tight">94318 84880</p>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl shrink-0 border border-white/10">🕒</div>
                  <div>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Clinic Hours</p>
                    <p className="text-slate-200 font-medium">Mon - Sat (9:00 AM - 7:00 PM)</p>
                  </div>
                </li>
              </ul>

              <div className="mt-12 p-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl">
                <button className="w-full bg-slate-900 py-4 rounded-xl font-bold hover:bg-transparent transition-all duration-300">
                   Get Directions
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}