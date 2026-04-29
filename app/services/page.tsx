"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Back & Neck Pain Treatment",
    desc: "Advanced therapy techniques to treat chronic and acute back and neck pain effectively.",
  },
  {
    title: "Sports Injury Rehabilitation",
    desc: "Complete recovery programs for ligament injuries, muscle strain and sports trauma.",
  },
  {
    title: "Post Surgery Rehabilitation",
    desc: "Faster recovery after orthopedic, knee replacement and spine surgeries.",
  },
  {
    title: "Stroke Rehabilitation",
    desc: "Specialized physiotherapy for stroke patients to improve mobility and strength.",
  },
  {
    title: "Frozen Shoulder Treatment",
    desc: "Effective therapy sessions to restore shoulder mobility and reduce stiffness.",
  },
  {
    title: "Home Visit Physiotherapy",
    desc: "Professional physiotherapy treatment at your home in Surajpur, Noida.",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Our Physiotherapy Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert physiotherapy treatments available in Surajpur, Noida to help you recover faster and live pain-free.
          </p>
        </motion.div>

        {/* Animated Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {service.desc}
              </p>

              <a
                href="tel:9431884880"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Call Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}