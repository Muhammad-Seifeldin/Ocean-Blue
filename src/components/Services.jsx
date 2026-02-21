import { useNavigate } from "react-router-dom";

function HomeServices() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Luxury Experiences",
      description:
        "Curated ocean experiences including private sunset cruises, sandbank escapes, and bespoke island adventures.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      path: "/experiences",
      cta: "Explore Experiences",
    },
    {
      title: "Private Transfers",
      description:
        "Seamless luxury boat and vehicle transfers across Zanzibar, designed for comfort, privacy, and peace of mind.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      path: "/private-transfers",
      cta: "View Transfers",
    },
  ];

  return (
    <section className="bg-pearl-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-pearl-white rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-turquoise-horizon mb-4">
                {service.title}
              </h3>

              <p className="text-deep-ocean/80 leading-relaxed mb-8">
                {service.description}
              </p>

              <button
                onClick={() => navigate(service.path)}
                className="bg-turquoise-horizon text-pearl-white font-semibold px-6 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
              >
                {service.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeServices;
