"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { title: "Back & Neck Pain Treatment", desc: "Advanced therapy techniques to treat chronic and acute back and neck pain effectively.", icon: "🧘‍♂️" },
  { title: "Sports Injury Rehabilitation", desc: "Complete recovery programs for ligament injuries, muscle strain and sports trauma.", icon: "🏃‍♂️" },
  { title: "Post Surgery Rehabilitation", desc: "Faster recovery after orthopedic, knee replacement and spine surgeries.", icon: "🏥" },
  { title: "Stroke Rehabilitation", desc: "Specialized physiotherapy for stroke patients to improve mobility and strength.", icon: "🧠" },
  { title: "Frozen Shoulder Treatment", desc: "Effective therapy sessions to restore shoulder mobility and reduce stiffness.", icon: "🦾" },
  { title: "Home Visit Physiotherapy", desc: "Professional physiotherapy treatment at your home in Surajpur, Noida.", icon: "🏠" },
];

// --- 1. Typewriter Component ---
const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

// --- 2. Bubble Particle Component ---
const BackgroundBubbles = () => {
  const bubbles = Array.from({ length: 40 }); // Kitni bundi chahiye
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: Math.random() * 0.5, 
            y: "110vh", 
            x: `${Math.random() * 100}vw` 
          }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 0.4, 0] 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear" 
          }}
          className="absolute bg-blue-400 rounded-full blur-[1px]"
          style={{
            width: `${Math.random() * 4 + 2}px`, // Choti bundi (2px to 6px)
            height: `${Math.random() * 4 + 2}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen py-24 bg-[#030508] overflow-hidden text-white">
      
      {/* Bundi-Bundi (Floating Bubbles) Effect */}
      <BackgroundBubbles />

      {/* Main Gradient Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- HEADING WITH TYPEWRITER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <span className="text-blue-500 font-bold tracking-[.3em] uppercase text-xs mb-4 block">Premium Care</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <TypewriterText text="Our Specialized Physiotherapy Services" />
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-10 md:h-14 bg-blue-500 ml-2 align-middle"
            />
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hum provide karte hain modern physiotherapy solutions Surajpur, Noida mein, taaki aap jaldi recover karein.
          </p>
        </motion.div>

        {/* --- SERVICES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="group relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] transition-all duration-500 shadow-2xl"
            >
              <div className="text-4xl mb-6 bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-all">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-8 leading-relaxed">
                {service.desc}
              </p>

              <motion.a
                href="tel:9431884880"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg"
              >
                Book Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}