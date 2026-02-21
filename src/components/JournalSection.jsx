import { useNavigate } from "react-router-dom";

function HomeJournal() {
  const navigate = useNavigate();

  const posts = [
    {
      title: "The Calm of Zanzibar at Sunset",
      excerpt:
        "As the sun dips below the horizon, Zanzibar reveals its most tranquil side — a moment best experienced from the water.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Why Private Ocean Experiences Matter",
      excerpt:
        "Luxury is not excess — it’s space, privacy, and the freedom to move at your own rhythm.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Slowly: Discover Zanzibar Differently",
      excerpt:
        "Beyond crowded tours lies a quieter, more meaningful way to explore the island and its waters.",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-pearl-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-ocean">
            Blue Journal
          </h2>
          <p className="text-deep-ocean/70 max-w-2xl mx-auto leading-relaxed">
            Stories, reflections, and inspiration from the ocean and the island.
          </p>
        </div>

        {/* Journal Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-pearl-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-turquoise-horizon mb-3">
                  {post.title}
                </h3>
                <p className="text-deep-ocean/80 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => navigate("/journal")}
                  className="text-turquoise-horizon font-semibold hover:text-deep-ocean transition-colors duration-300"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/journal")}
            className="bg-turquoise-horizon text-pearl-white font-semibold px-8 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
          >
            View Journal
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeJournal;
