import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PhysioCare Noida",
  description:
    "PhysioCare is a trusted physiotherapy clinic located in Surajpur, Noida providing expert treatment for pain relief and rehabilitation.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            About PhysioCare
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted Physiotherapy Clinic in Surajpur, Noida
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 mb-6 leading-7">
              PhysioCare is a professional physiotherapy clinic located in 
              Surajpur, Noida. We provide expert treatment for back pain, 
              sports injuries, post-surgery rehabilitation, and chronic pain 
              management with modern techniques and personalized care.
            </p>

            <p className="text-gray-700 leading-7">
              Our mission is to help patients recover faster and live a 
              pain-free life through advanced physiotherapy solutions.
            </p>
          </div>

          {/* Right Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Clinic Information
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                📍 <strong>Location:</strong> Surajpur, Noida, Uttar Pradesh
              </li>
              <li>
                📞 <strong>Phone:</strong> 94318 84880
              </li>
              <li>
                🕒 <strong>Timings:</strong> Mon - Sat (9:00 AM - 7:00 PM)
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}