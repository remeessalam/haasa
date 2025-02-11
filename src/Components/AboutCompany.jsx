import aboutcompanyimage from "../assets/image/aboutcompanyimage.png";
const AboutCompany = () => {
  return (
    <div className=" bg-white p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="section-name mb-2">Our Story</h2>
        <h1 className="main-heading">About Company</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section with Image and Experience Box */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden ">
            <img
              src={aboutcompanyimage}
              alt="Business people silhouettes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Box */}
          <div className="absolute -bottom-20 left-0 bg-primary text-white p-4 sm:p-8 rounded-3xl max-w-sm">
            <div className="mb-1 sm:mb-4">
              <span className="text-2xl sm:text-6xl font-bold">2</span>
              <span className="text-xl sm:text-4xl font-bold">+</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">
              Years of Experience
            </h3>
            <p className="text-sm">
              The trusted choice for your software development solutions
            </p>
          </div>
        </div>

        {/* Right Section with Vision */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <h3 className="text-[#6B21A8] text-3xl font-bold leading-tight">
            Empowering Businesses to Adapt, Innovate, and Thrive Through
            Technology
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be the trusted partner that businesses turn to when
            they need to adapt, innovate, and excel. We believe that technology
            should not be a barrier but a catalyst for growth. Through our
            solutions, we aim to transform the way businesses operate, helping
            them stay competitive in an increasingly complex world.
          </p>
          <button className="bg-[#FF9B3E] text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutCompany;
