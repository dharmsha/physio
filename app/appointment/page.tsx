"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Appointment Booking* 🏥%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Problem:* ${formData.problem}`;

    const whatsappNumber = "919431884880"; 
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen py-24 bg-white relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* HEADING SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block animate-pulse">Book Slot</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Schedule Your <span className="text-blue-600">Recovery</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Fill out the form below to book a professional physiotherapy session at our Surajpur clinic.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Kumar"
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-slate-800"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit number"
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-slate-800"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-slate-800"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-slate-800"
                />
              </div>
            </div>

            {/* Problem Description */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Describe Your Problem</label>
              <textarea
                name="problem"
                rows={4}
                placeholder="Briefly explain your pain or condition..."
                required
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-slate-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
            >
              <span>Confirm Via WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            <p className="text-center text-slate-400 text-sm">
              *By clicking confirm, you will be redirected to WhatsApp to finish booking.
            </p>
          </form>
        </motion.div>

        {/* TRUST BADGES */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-center text-xs font-bold uppercase tracking-tighter">Safe & Secure</div>
          <div className="text-center text-xs font-bold uppercase tracking-tighter">Expert Doctors</div>
          <div className="text-center text-xs font-bold uppercase tracking-tighter">Modern Clinic</div>
          <div className="text-center text-xs font-bold uppercase tracking-tighter">Quality Care</div>
        </div>

      </div>
    </section>
  );
}