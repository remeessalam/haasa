import { useForm } from "react-hook-form";
import leadformbgimage from "../assets/image/leadformbgimage.jpeg";
import { useNavigate } from "react-router-dom";
import { clientDetails } from "../Constant";
import toast from "react-hot-toast";
const LeadForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const emailBody = `Name: ${values.name}\n\nEmail: ${values.email}\n\nPhone: ${values.phone}\n\nMessage:\n${values.message}`;

    const payload = {
      to: clientDetails.email,
      name: "Elixirai",
      subject: values.subject,
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
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      id="contactus"
      className="relative   bg-no-repeat bg-current bg-cover"
      style={{
        backgroundImage: `url(${leadformbgimage})`,
      }}
    >
      <div className="absolute  w-full h-full bg-black/70" />
      {/* Content */}
      <div className="py-[5rem] z-10 ">
        <div className="grid wrapper md:grid-cols-2 items-center">
          <div className="">
            <h1 className="section-name" data-aos="fade-right">
              Contact Us
            </h1>

            <h2
              className="text-white text-5xl font-bold mt-4 leading-tight"
              data-aos="fade-right"
            >
              Please leave your Quires through a contact form. Our Industry
              experts will contact you
            </h2>
          </div>

          <div className="mt-8" data-aos="fade-left">
            <h1 className="text-white text-3xl font-bold mb-8">
              GET IN TOUCH WITH US
            </h1>
            <p className="text-white mb-8">
              We are always open to discuss your project, improve your online
              presence
            </p>

            <form className="space-y-6 z-20" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-white text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md"
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
                <label className="text-white text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md"
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
                <label className="text-white text-sm mb-2 block">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-md"
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
                <label className="text-white text-sm mb-2 block">Message</label>
                <textarea
                  className="w-full p-3 rounded-md h-32"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button type="submit" className="!w-full primary-btn py-3">
                SUBMIT YOUR QUIRES
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeadForm;
