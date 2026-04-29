"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Back & Neck Pain",
    desc: "Advanced physiotherapy treatment for chronic and acute pain relief.",
  },
  {
    title: "Sports Injury Rehab",
    desc: "Complete rehabilitation program for sports-related injuries.",
  },
  {
    title: "Post Surgery Therapy",
    desc: "Speed up recovery after orthopedic and spine surgeries.",
  },
  {
    title: "Home Visit Physio",
    desc: "Professional physiotherapy treatment at your home.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Our Physiotherapy Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.desc}
              </p>

              <Link
                href="/services"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}