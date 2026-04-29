"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart, Code2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Bubbles Animation
  const bubbles = Array.from({ length: 15 });

  return (
    <footer className="relative bg-[#05070a] text-gray-400 pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* --- BUBBLE ANIMATION (Bundi-Bundi) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: `${Math.random() * 100}%` }}
            animate={{ y: -200, opacity: [0, 0.2, 0] }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Clinic Branding */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter">
              Physio<span className="text-blue-600">Care</span>
            </Link>
            <p className="text-sm leading-7">
              Patna's leading physiotherapy clinic dedicated to restoring your mobility and health through advanced therapy and expert care.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-blue-600", link: "#" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600", link: "#" },
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-800", link: "#" },
                { icon: <FaWhatsapp />, color: "hover:bg-green-600", link: "https://wa.me/919431884880" }
              ].map((social, i) => (
                <a key={i} href={social.link} className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" /> Quick Explore
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'About', 'Services', 'Contact', 'Appointment'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-500 hover:translate-x-2 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" /> Treatments
            </h4>
            <ul className="space-y-4 text-sm">
              <li>Back & Neck Pain</li>
              <li>Sports Injury Rehab</li>
              <li>Post Surgery Therapy</li>
              <li>Stroke Rehabilitation</li>
              <li>Frozen Shoulder</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full" /> Get In Touch
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-blue-600 shrink-0" size={20} />
                <span>Mithapur, Patna, Bihar</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <a href="tel:9431884880" className="hover:text-white transition-colors">+91 94318 84880</a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <a href="mailto:info@physiocare.com" className="hover:text-white transition-colors">info@physiocare.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} PhysioCare. All Rights Reserved.
          </p>
          
          {/* Developed By Section (Aapka Naam) */}
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl group hover:border-blue-500/50 transition-all duration-500">
            <Code2 size={16} className="text-blue-500 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold text-gray-300">
              Developed by <span className="text-white group-hover:text-blue-500 transition-colors">Dharm Kumar</span>
            </span>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <a href="tel:7404980061" className="text-[10px] font-mono text-gray-500 hover:text-white transition-colors">
              +91 7404980061
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}