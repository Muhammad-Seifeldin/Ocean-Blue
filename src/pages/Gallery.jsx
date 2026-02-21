function Gallery() {
    const experiences = [
      {
        title: "Private Sunset Cruise",
        photos: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        title: "Sandbank Escape",
        photos: [
          "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        title: "Island Transfers",
        photos: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ];
  
    return (
      <section className="bg-pearl-white text-deep-ocean py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-turquoise-horizon">
            Gallery
          </h1>
  
          {experiences.map((exp, index) => (
            <div key={exp.title} className="mb-16">
              {/* Experience Title */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-turquoise-horizon text-center">
                {exp.title}
              </h2>
  
              {/* Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {exp.photos.map((photo, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full"
                  >
                    <img
                      src={photo}
                      alt={`${exp.title} ${i + 1}`}
                      className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
  
              {/* Divider (except after last section) */}
              {index < experiences.length - 1 && (
                <div className="border-t-2 border-t-turquoise-horizon my-16"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;
  