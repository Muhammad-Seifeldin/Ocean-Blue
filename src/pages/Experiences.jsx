import { useNavigate } from "react-router-dom";

function Experiences() {
  const navigate = useNavigate();

  const experiences = [
    {
      title: "Private Sunset Cruise",
      description:
        "Sail across Zanzibar’s turquoise waters at sunset, enjoying champagne and personalized service.",
      image:
        "https://plus.unsplash.com/premium_photo-1712067481538-56539176263c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpdmF0ZSUyMHN1bnNldCUyMGNydWlzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Sandbank Escape",
      description:
        "Discover a private sandbank for ultimate relaxation, snorkeling, and untouched natural beauty.",
      image:
        "https://plus.unsplash.com/premium_photo-1707030602967-1746652afaf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZGJhbmt8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Island Transfers",
      description:
        "Luxury boat transfers between Zanzibar’s pristine islands, seamless, safe, and comfortable.",
      image:
        "https://plus.unsplash.com/premium_photo-1680831748734-87103434f0f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXNsYW5kJTIwdHJhbnNmZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Experiences</h1>
          <p className="text-turquoise-horizon">
            Discover the curated luxury experiences Zanzibar has to offer
          </p>
        </div>

        {/* Large Horizontal Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`flex flex-col md:flex-row ${
                index === 1 ? "md:flex-row-reverse" : ""
              } bg-pearl-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="md:w-1/2 shrink-0 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-72 md:h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-turquoise-horizon">
                    {exp.title}
                  </h3>
                  <p className="text-deep-ocean/80 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Secondary Button */}
                <div>
                  <button
                    onClick={() => navigate("/gallery")}
                    className="bg-turquoise-horizon text-pearl-white font-semibold px-6 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
                  >
                    View Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
