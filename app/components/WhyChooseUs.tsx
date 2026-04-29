export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose PhysioCare?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Certified & Experienced Physiotherapist</li>
            <li>✔ Modern Equipment & Techniques</li>
            <li>✔ Personalized Treatment Plans</li>
            <li>✔ Affordable & Effective Care</li>
            <li>✔ Home Visit Available</li>
          </ul>
        </div>

        <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            10+ Years Experience
          </h3>
          <p>
            We have successfully treated 5000+ patients with proven recovery
            programs and advanced physiotherapy techniques.
          </p>
        </div>
      </div>
    </section>
  );
}