import leadformbgimage from "../assets/image/leadformbgimage.jpeg";
const LeadForm = () => {
  return (
    <div
      className="relative -z-20  bg-no-repeat bg-current bg-cover"
      style={{
        backgroundImage: `url(${leadformbgimage})`,
      }}
    >
      <div className="absolute -z-10 w-full h-full bg-black/70" />
      {/* Content */}
      <div className="py-[5rem] z-10 ">
        <div className="grid wrapper md:grid-cols-2 items-center">
          <div className="">
            <span className="text-orange-400 text-lg font-semibold">
              Contact Us
            </span>

            <h2 className="text-white text-5xl font-bold mt-4 leading-tight">
              Please leave your Quires through a contact form. Our Industry
              experts will contact you
            </h2>
          </div>

          <div className="mt-8">
            <h1 className="text-white text-3xl font-bold mb-8">
              GET IN TOUCH WITH US
            </h1>
            <p className="text-white mb-8">
              We are always open to discuss your project, improve your online
              presence
            </p>

            <form className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md"
                  placeholder="Enter Subject"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Message</label>
                <textarea
                  className="w-full p-3 rounded-md h-32"
                  placeholder="Enter Message"
                ></textarea>
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
