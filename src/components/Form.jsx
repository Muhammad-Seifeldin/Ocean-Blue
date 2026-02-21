import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setSuccess(false);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Data:", data);

    setSuccess(true);
    reset();
  };

  return (
   
      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-pearl-white shadow-xl rounded-2xl p-8 space-y-6"
          noValidate
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-deep-ocean/20 focus:ring-turquoise-horizon"
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
            <div>
            <label htmlFor="email" className="block mb-2 font-medium">
                Email
            </label>
            <input
                id="email"
                type="email"
                {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                },
                })}
                className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-deep-ocean/20 focus:ring-turquoise-horizon"
                }`}
                placeholder="myemail@email.com"
            />
            {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
                </p>
            )}
            </div>


          {/* Enquiry */}
          <div>
            <label htmlFor="enquiry" className="block mb-2 font-medium">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              rows="5"
              {...register("enquiry", {
                required: "Please enter your enquiry",
              })}
              className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 resize-none ${
                errors.enquiry
                  ? "border-red-500 focus:ring-red-400"
                  : "border-deep-ocean/20 focus:ring-turquoise-horizon"
              }`}
              placeholder="Tell us about your dream experience"
            />
            {errors.enquiry && (
              <p className="text-red-600 text-sm mt-1">
                {errors.enquiry.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded font-semibold text-pearl-white transition-colors duration-300 ${
                isSubmitting
                  ? "bg-deep-ocean/50 cursor-not-allowed"
                  : "bg-turquoise-horizon hover:bg-deep-ocean"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {success && (
              <span className="text-green-600 font-medium">
                Message sent successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    
  );
}

export default Form;
