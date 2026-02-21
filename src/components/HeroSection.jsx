import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-pearl-white text-deep-ocean">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Zanzibar Ocean"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-deep-ocean/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pearl-white leading-tight mb-6">
            Where the Ocean Meets Serenity
          </h1>

          <p className="text-pearl-white/90 text-lg md:text-xl leading-relaxed mb-10">
            Discover luxury ocean excursions and private island transfers in Zanzibar,
            crafted for effortless comfort, authenticity, and calm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/experiences")}
              className="bg-turquoise-horizon text-pearl-white font-semibold px-8 py-4 rounded hover:bg-deep-ocean transition-colors duration-300"
            >
              Explore Experiences
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-pearl-white text-pearl-white font-semibold px-8 py-4 rounded hover:bg-pearl-white hover:text-deep-ocean transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
