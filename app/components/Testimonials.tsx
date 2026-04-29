export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted by Patients Across India 🇮🇳
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "I consulted for chronic back pain through online guidance and home therapy support. Amazing improvement within weeks."
            </p>
            <h4 className="font-semibold">— Rahul Kumar (Delhi)</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "Very professional physiotherapy treatment and personalized care plan. Highly recommended."
            </p>
            <h4 className="font-semibold">— Priya Singh (Mumbai)</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "Excellent sports injury rehabilitation program. Helped me recover faster and return to my training."
            </p>
            <h4 className="font-semibold">— Amit Verma (Bangalore)</h4>
          </div>

        </div>
      </div>
    </section>
  );
}