"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/abc.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-end justify-center h-full pb-12 px-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:w-auto">
          
          <Link
            href="/appointment"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Book Appointment
          </Link>

          <a
            href="tel:+919431884880"
            className="w-full sm:w-auto text-center bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Call Now
          </a>

        </div>
      </div>

    </section>
  );
}