const testimonials = [
    {
      name: "Sophie L.",
      location: "Paris, France",
      quote:
        "Ocean Blue exceeded every expectation. From the moment we stepped on board, everything felt effortless, calm, and beautifully curated. Truly unforgettable.",
    },
    {
      name: "Omar A.",
      location: "Dubai, UAE",
      quote:
        "The level of service was exceptional. Private, elegant, and perfectly organized. Ocean Blue showed us a side of Zanzibar we’ll never forget.",
    },
    {
      name: "Emma & James",
      location: "London, UK",
      quote:
        "Our sunset cruise was pure magic. Peaceful waters, attentive staff, and a sense of luxury without being overdone. Highly recommended.",
    },
    {
      name: "Daniel K.",
      location: "Nairobi, Kenya",
      quote:
        "Professional, reliable, and incredibly thoughtful. Ocean Blue made our island transfers smooth and enjoyable from start to finish.",
    },
  ];
  
  function Testimonials() {
    return (
      <section className="bg-pearl-white text-deep-ocean py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-14 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Guest Experiences
            </h1>
            <p className="text-turquoise-horizon">
              What our guests say about their journey with Ocean Blue
            </p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-deep-ocean/80 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
  
                <div className="mt-auto">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-deep-ocean/60">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Optional CTA */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-deep-ocean/80">
              Ready to create your own Ocean Blue experience?
            </p>
            <a
              href="/book-now"
              className="inline-block bg-turquoise-horizon text-pearl-white font-semibold px-8 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  