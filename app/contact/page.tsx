import type { Metadata } from "next";

// 1. Metadata (Server Side - SEO ke liye safe)
export const metadata: Metadata = {
  title: "Contact PhysioCare | Physiotherapy Clinic in Surajpur Noida",
  description:
    "Contact PhysioCare in Surajpur, Noida for expert physiotherapy treatment. Call 94318 84880 to book your appointment today.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen py-24 bg-[#030712] overflow-hidden text-white font-sans">
      
      {/* --- 2. PREMIUM BACKGROUND (BUBBLES & GLOW) --- */}
      {/* Ye bubbles bina JS ke animate honge Tailwind animations se */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
        
        {/* Floating Bundi (Particles) using simple CSS circles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20" />
        <div className="absolute bottom-40 right-[30%] w-3 h-3 bg-cyan-500 rounded-full animate-bounce opacity-20" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* --- 3. HEADING WITH "TYPEWRITER" EFFECT (via CSS) --- */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight overflow-hidden border-r-4 border-blue-500 whitespace-nowrap mx-auto w-fit animate-typing">
            Connect With <span className="text-blue-500">PhysioCare</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Dard ko kahein alvida! Hamare experts se judne ke liye aaj hi sampark karein. 
             Expert care is just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* --- 4. GLASSIC CONTACT INFO --- */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-500 group">
            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-blue-400">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
                Clinic Spotlight
              </h2>

              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl text-2xl group-hover:scale-110 transition-transform">📍</div>
                  <div>
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Clinic Address</p>
                    <p className="text-gray-200 text-lg font-medium">Surajpur, Noida, Uttar Pradesh</p>
                  </div>
                </li>

                <li className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl text-2xl group-hover:scale-110 transition-transform">📞</div>
                  <div>
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Quick Contact</p>
                    <a href="tel:9431884880" className="text-2xl font-bold hover:text-blue-400 transition-colors">94318 84880</a>
                  </div>
                </li>

                <li className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl text-2xl group-hover:scale-110 transition-transform">🕒</div>
                  <div>
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">Consultation Hours</p>
                    <p className="text-gray-200">Mon - Sat (9:00 AM - 7:00 PM)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Premium WhatsApp Button */}
            <div className="mt-12">
              <a
                href="https://wa.me/919431884880"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-5 rounded-2xl hover:bg-green-700 hover:shadow-[0_0_30px_rgba(22,163,74,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-3.669c1.551.921 3.253 1.408 4.992 1.409 5.485 0 9.949-4.463 9.951-9.948 0-2.657-1.033-5.155-2.908-7.03-1.875-1.875-4.375-2.908-7.031-2.908-5.485 0-9.949 4.464-9.951 9.95-.001 1.745.459 3.447 1.332 4.962l-1.03 3.765 3.868-1.015-.223-.115z" /></svg>
              </a>
            </div>
          </div>

          {/* --- 5. MODERN MAP CONTAINER --- */}
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative min-h-[450px]">
             {/* Map overlay blur to match the vibe */}
            <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.671043306915!2d77.4900!3d28.513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzQ2LjgiTiA3N8KwMjknMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="grayscale brightness-75 hover:grayscale-0 hover:brightness-110 transition-all duration-1000 border-none"
            ></iframe>
          </div>

        </div>
      </div>
      
      {/* 6. Inline CSS for Animations (Kyuki hum client logic use nahi kar rahe) */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        .animate-typing {
          animation: typing 3.5s steps(30, end), blink .75s step-end infinite;
        }
      `}</style>
    </section>
  );
}