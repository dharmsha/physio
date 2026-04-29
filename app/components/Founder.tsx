"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Image Side */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
          
          <Image
            src="/raman.webp"  // public folder me image daal dena
            alt="Dr Raman - Founder & Chief Physiotherapist"
            width={600}
            height={700}
            className="w-full h-auto object-contain rounded-2xl"
          />

        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Meet Our Founder
          </h2>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Dr. Raman – Founder & Chief Physiotherapist
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Raman is a dedicated physiotherapy expert committed to transforming
            lives through compassionate care and advanced rehabilitation techniques.
            His journey began with one vision — to help people live pain-free and
            regain their confidence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With years of hands-on clinical experience, he has successfully treated
            patients suffering from chronic pain, sports injuries, post-surgery
            conditions, and neurological disorders. His patient-first approach
            ensures every individual receives personalized treatment and emotional support.
          </p>

          <div className="bg-blue-100 p-6 rounded-2xl shadow-sm border-l-4 border-blue-600">
            <p className="text-gray-800 font-medium italic">
              "True healing begins when care meets compassion. My goal is not just
              recovery — but restoring strength, independence, and hope."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}