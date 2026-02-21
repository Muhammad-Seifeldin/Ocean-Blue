function About() {
  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Ocean Blue</h1>
          <p className="text-turquoise-horizon">
            Where the Ocean Meets Serenity
          </p>
        </div>

        {/* Brand Story Section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-deep-ocean/80 leading-relaxed">
                Born from a deep love for Zanzibar’s crystal waters and laid-back island rhythm,
                Ocean Blue was created to share the magic of the ocean in its most refined form.
                We don’t just offer excursions — we curate serene moments of luxury, connection, and
                discovery that stay with you long after the tide recedes.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Ocean Experience"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2 md:order-2">
              <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
              <p className="text-deep-ocean/80 leading-relaxed mb-4">
                Our mission is to provide seamless, personalized, luxury ocean experiences that capture
                the authentic spirit of Zanzibar. Every journey is crafted with attention to detail,
                ensuring comfort, tranquility, and unforgettable memories.
              </p>
              <p className="text-deep-ocean/80 leading-relaxed">
                Our vision is to become Zanzibar’s leading name in luxury ocean excursions, recognized
                globally for exceptional service, sustainable practices, and immersive island experiences.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Boat"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold mb-2 text-turquoise-horizon">Excellence in Service</h3>
                <p className="text-deep-ocean/80 leading-relaxed">
                  We deliver attention to detail and world-class service in every experience.
                </p>
              </div>
              <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold mb-2 text-turquoise-horizon">Authenticity</h3>
                <p className="text-deep-ocean/80 leading-relaxed">
                  We celebrate Zanzibar’s culture and natural beauty with genuine, curated experiences.
                </p>
              </div>
              <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold mb-2 text-turquoise-horizon">Sustainability</h3>
                <p className="text-deep-ocean/80 leading-relaxed">
                  We operate responsibly to preserve the ocean and island for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
