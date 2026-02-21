import { useState } from "react";

const faqs = [
  {
    question: "What types of experiences does Ocean Blue offer?",
    answer:
      "Ocean Blue specializes in luxury ocean excursions and private island transportation across Zanzibar. Our experiences include private cruises, sandbank escapes, island transfers, and fully customized journeys designed around your preferences.",
  },
  {
    question: "Are Ocean Blue experiences private or shared?",
    answer:
      "Most Ocean Blue experiences are private and personalized. We focus on exclusivity, comfort, and tranquility, ensuring you enjoy Zanzibar’s waters without crowds or interruptions.",
  },
  {
    question: "How do I book an experience?",
    answer:
      "You can book directly through our website using the Book Now button, or contact our team for a personalized proposal. We recommend booking in advance to ensure availability and customization.",
  },
  {
    question: "Is Ocean Blue suitable for couples and families?",
    answer:
      "Yes. Our experiences are ideal for couples seeking romantic escapes, families looking for safe and memorable adventures, and small private groups wanting a refined ocean experience.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "Your safety is our priority. Our vessels are modern and well-maintained, our crew is professionally trained, and all excursions follow strict safety and maritime regulations.",
  },
  {
    question: "Do you support sustainable tourism?",
    answer:
      "Absolutely. Ocean Blue operates with an eco-luxury philosophy, respecting marine life, minimizing environmental impact, and supporting local communities whenever possible.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-turquoise-horizon">
            Everything you need to know before setting sail with Ocean Blue
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-deep-ocean/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center hover:bg-pearl-white transition"
              >
                <span>{faq.question}</span>
                <span className="text-turquoise-horizon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-deep-ocean/80 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
