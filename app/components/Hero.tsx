"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ram.png"
          alt="Physiotherapy Treatment Session"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Buttons Bottom Center */}
      <div className="relative z-10 mb-16 flex flex-col sm:flex-row gap-4">
        <Link
          href="/appointment"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Book Appointment
        </Link>

        <a
          href="tel:+919431884880"
          className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Call Now
        </a>
      </div>

    </section>
  );
}