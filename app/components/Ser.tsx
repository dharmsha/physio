"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, HeartPulse, Zap, Home, Move } from "lucide-react";

const services = [
  { title: "Back & Neck Pain", desc: "Expert therapy for chronic and acute spinal pain.", icon: <Activity className="text-blue-600" /> },
  { title: "Sports Injury", desc: "Complete recovery programs for athletes.", icon: <Zap className="text-blue-600" /> },
  { title: "Post Surgery", desc: "Faster rehab after orthopedic & knee surgeries.", icon: <ShieldCheck className="text-blue-600" /> },
  { title: "Stroke Rehab", desc: "Specialized care to improve mobility & strength.", icon: <HeartPulse className="text-blue-600" /> },
  { title: "Home Visit", desc: "Professional treatment at your doorstep.", icon: <Home className="text-blue-600" /> },
  { title: "Frozen Shoulder", desc: "Restore shoulder mobility & reduce stiffness.", icon: <Move className="text-blue-600" /> },
];

// Slider ke liye hum list ko double kar dete hain taaki loop infinite lage
const duplicatedServices = [...services, ...services];

export default function ServicesSlider() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
              Our Premium <span className="text-blue-600">Services</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base">
            Slide through our specialized treatments designed to get you back on your feet faster and stronger.
          </p>
        </div>
      </div>

      {/* --- INFINITE SLIDER CONTAINER --- */}
      <div className="relative flex">
        <motion.div
          className="flex gap-8"
          animate={{
            x: ["0%", "-50%"], // 0 se 50% tak move karega (kyuki list double hai)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, // Jitna bada number, utna slow slider
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:border-blue-200 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 mb-8 leading-relaxed">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <span>LEARN MORE</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- CALL TO ACTION --- */}
      <div className="text-center mt-20">
        <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all transform active:scale-95 shadow-xl shadow-slate-200">
          View All Specialities
        </button>
      </div>
    </section>
  );
}