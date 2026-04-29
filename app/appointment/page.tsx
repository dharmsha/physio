"use client";

import { useState } from "react";

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

    const message = `
Hello PhysioCare,

New Appointment Booking:

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Problem: ${formData.problem}
    `;

    const whatsappNumber = "919876543210"; // 🔁 apna number daal dena

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Book Your Appointment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="problem"
            placeholder="Describe Your Problem"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}