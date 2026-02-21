import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury ocean experience in Zanzibar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafted Ocean Experiences in Zanzibar
          </h2>

          <p className="text-deep-ocean/80 leading-relaxed mb-6">
            Ocean Blue was born from a love for Zanzibar’s crystal waters and the
            belief that true luxury lies in serenity. We curate refined ocean
            experiences that blend comfort, authenticity, and seamless service.
          </p>

          <p className="text-deep-ocean/80 leading-relaxed mb-10">
            From private sunset cruises to exclusive island transfers, every
            journey is thoughtfully designed to connect you with the rhythm of
            the ocean — effortlessly and beautifully.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center gap-2 bg-turquoise-horizon text-pearl-white font-semibold px-8 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
