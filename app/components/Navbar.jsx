"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled 
        ? "bg-white border-b border-slate-100 py-3 shadow-sm" 
        : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Solid & Bold */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300">
            <span className="text-white font-bold text-lg italic">P</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Physio<span className="text-blue-600">Care</span>
          </span>
        </Link>

        {/* DESKTOP MENU: Minimalist */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[13px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-blue-600 transition-all"
            >
              {link.name}
            </Link>
          ))}

          {/* SOLID CTA BUTTON */}
          <Link
            href="/appointment"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-900 shadow-lg shadow-blue-100 transition-all transform active:scale-95"
          >
            <span>BOOK NOW</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden flex items-center gap-3">
          <a href="tel:9431884880" className="p-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-100">
             <Phone size={18} />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-slate-900 text-white rounded-xl"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY: Solid & Clean */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/appointment"
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}