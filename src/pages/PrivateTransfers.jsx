function PrivateTransfers() {
    return (
      <section className="bg-pearl-white text-deep-ocean py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Private Transfers
            </h1>
            <p className="text-turquoise-horizon">
              Seamless, luxurious transportation across Zanzibar
            </p>
          </div>
  
          {/* Feature Section */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Luxury & Comfort</h2>
              <p className="text-deep-ocean/80 leading-relaxed mb-4">
                Ocean Blue private transfers offer the ultimate in comfort and convenience. 
                Our modern fleet, professional drivers, and personalized service ensure a 
                smooth, relaxing journey whether you’re traveling from the airport, hotel, 
                or between islands.
              </p>
              <p className="text-deep-ocean/80 leading-relaxed">
                Every transfer is designed to reflect the elegance and serenity of our brand, 
                making sure your travel is as enjoyable as your destination.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1705251464551-5b7f74314a43?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Private Transfer"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>
  
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="font-semibold mb-2 text-turquoise-horizon">Professional Drivers</h3>
              <p className="text-deep-ocean/80 leading-relaxed">
                Our experienced drivers are trained for safety, discretion, and high-end service.
              </p>
            </div>
            <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="font-semibold mb-2 text-turquoise-horizon">Modern Fleet</h3>
              <p className="text-deep-ocean/80 leading-relaxed">
                Enjoy luxurious, well-maintained vehicles designed for comfort and style.
              </p>
            </div>
            <div className="bg-pearl-white border border-deep-ocean/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="font-semibold mb-2 text-turquoise-horizon">Personalized Experience</h3>
              <p className="text-deep-ocean/80 leading-relaxed">
                Tailored itineraries, flexible timing, and thoughtful details ensure a seamless journey.
              </p>
            </div>
          </div>
  
          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="mb-4 text-deep-ocean/80">
              Ready to enjoy Zanzibar with total comfort and elegance?
            </p>
            <a
              href="/book-now"
              className="inline-block bg-turquoise-horizon text-pearl-white font-semibold px-8 py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
            >
              Book Your Private Transfer
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default PrivateTransfers;
  