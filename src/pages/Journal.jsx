import { useNavigate } from "react-router-dom";

function Journal() {
  const navigate = useNavigate();

  const posts = [
    {
      title: "The Calm of Zanzibar at Sunset",
      excerpt:
        "As the sun dips below the horizon, Zanzibar reveals its most tranquil side — best experienced from the water.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Why Private Ocean Experiences Matter",
      excerpt:
        "Luxury is not excess — it is space, privacy, and the freedom to move at your own rhythm.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Slowly: Discover Zanzibar Differently",
      excerpt:
        "Beyond crowded tours lies a quieter, more meaningful way to experience the island and its waters.",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Life Between Tides",
      excerpt:
        "Moments of stillness, movement, and connection found only when time slows down by the ocean.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-pearl-white text-deep-ocean py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Journal</h1>
          <p className="text-deep-ocean/70 max-w-2xl mx-auto leading-relaxed">
            Reflections, stories, and inspiration drawn from the ocean and the
            rhythm of Zanzibar.
          </p>
        </div>

        {/* Journal Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-pearl-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-turquoise-horizon mb-4">
                  {post.title}
                </h2>

                <p className="text-deep-ocean/80 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => navigate("/journal")}
                  className="text-turquoise-horizon font-semibold hover:text-deep-ocean transition-colors duration-300"
                >
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journal;
