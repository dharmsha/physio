"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">PhysioCare</h3>
          <p className="text-sm leading-6">
            Professional physiotherapy clinic in Patna providing expert
            treatment for back pain, sports injury, and rehabilitation therapy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/appointment" className="hover:text-white">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Back & Neck Pain</li>
            <li>Sports Injury Rehab</li>
            <li>Post Surgery Therapy</li>
            <li>Stroke Rehabilitation</li>
            <li>Home Visit Physiotherapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} /> Mithapur, Patna, Bihar
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} /> +91 94318 84880
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> info@physiocare.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF className="text-white" size={16} />
            </a>
            <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
              <FaInstagram className="text-white" size={16} />
            </a>
            <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition">
              <FaLinkedinIn className="text-white" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} PhysioCare. All Rights Reserved.
      </div>
    </footer>
  );
}