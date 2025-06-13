import React from "react";
import { useForm } from "react-hook-form";
import { clientDetails } from "../Constant";
import toast from "react-hot-toast";

// Log when the component is loaded
console.log("GetInTouchModal component loaded");

const GetInTouchModal = ({ onClose }) => {
  console.log("GetInTouchModal rendered");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const emailBody = `Name: ${values.name}\n\nEmail: ${values.email}\n\nPhone: ${values.phone}\n\nMessage:\n${values.message}`;

    const payload = {
      to: clientDetails.email,
      name: "Haasa",
      subject: "New Contact Request from Website Popup",
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Thank you for contacting us! We'll get back to you soon.");
        reset();
        onClose();
        // Set localStorage to remember that user has submitted the form
        localStorage.setItem("haasaContactSubmitted", "true");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto relative p-6 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#0C258B]">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-[#818181] text-sm mb-1 block">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md border border-gray-300"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[#818181] text-sm mb-1 block">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-md border border-gray-300"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[#818181] text-sm mb-1 block">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-md border border-gray-300"
              placeholder="Your Phone Number"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[#818181] text-sm mb-1 block">
              Message
            </label>
            <textarea
              className="w-full p-3 rounded-md border border-gray-300 h-24"
              placeholder="How can we help you?"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0C258B] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchModal;