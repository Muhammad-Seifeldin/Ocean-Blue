import Form from "../components/Form";

function Contact() {

  return (
    <section className="bg-pearl-white text-deep-ocean py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Intro */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-deep-ocean/70 max-w-4xl mx-auto text-center leading-relaxed">
            Get in touch with us to plan your private Zanzibar experience.
            Our team will respond promptly to all of your enquiries.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div>
            <h3 className="font-semibold text-turquoise-horizon mb-2">
              Email
            </h3>
            <p>info@luxuryzanzibar.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-turquoise-horizon mb-2">
              Phone
            </h3>
            <p>+255 700 000 000</p>
          </div>

          <div>
            <h3 className="font-semibold text-turquoise-horizon mb-2">
              Location
            </h3>
            <p>Zanzibar, Tanzania</p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
