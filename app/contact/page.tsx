import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PhysioCare | Physiotherapy Clinic in Surajpur Noida",
  description:
    "Contact PhysioCare in Surajpur, Noida for expert physiotherapy treatment. Call 94318 84880 to book your appointment today.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Get in touch with PhysioCare for expert physiotherapy services in Surajpur, Noida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Clinic Information
            </h2>

            <ul className="space-y-5 text-gray-700">
              <li>
                📍 <strong>Address:</strong> Surajpur, Noida, Uttar Pradesh
              </li>
              <li>
                📞 <strong>Phone:</strong> 
                <a href="tel:9431884880" className="text-blue-600 ml-2">
                  94318 84880
                </a>
              </li>
              <li>
                📧 <strong>Email:</strong> info@physiocare.com
              </li>
              <li>
                🕒 <strong>Timings:</strong> Mon - Sat (9:00 AM - 7:00 PM)
              </li>
            </ul>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/919431884880"
                target="_blank"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Surajpur,Noida&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[400px]"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}