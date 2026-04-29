"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PhysioCare
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/appointment"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/services" className="block">
            Services
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
          <Link
            href="/appointment"
            className="block bg-blue-600 text-white text-center py-2 rounded-full"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}