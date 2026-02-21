import BookingEngine from "../components/BookingEngine";

function BookNow() {
  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Experience
          </h1>
          <p className="text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            Design your private Ocean Blue experience by selecting your
            preferred service, date, and group size. Instantly receive an
            estimated price before submitting your request.
          </p>
        </div>
        {/* Booking Engine Component */}
        <BookingEngine />
      </div>
    </section>
  );
}

export default BookNow;