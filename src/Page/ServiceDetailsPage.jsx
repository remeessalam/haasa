import React from "react";
import { useParams, Link } from "react-router-dom";
import { updatedServices } from "../Constant";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../assets/image/servicebanner.png";

const ServiceDetailsPage = () => {
  const { path } = useParams();
  const service = updatedServices.find((s) => s.path === path);

  if (!service) {
    return (
      <div className="text-center text-red-500 text-2xl mt-10">
        Service not found!
      </div>
    );
  }

  return (
    <div className="pt-[80px] pb-[5rem] max-w-screen overflow-x-hidden">
      {/* Banner Section */}
      <PageBanner image={bannerImage} title={service?.title} />

      {/* Main Content & Sidebar Layout */}
      <div className="wrapper mt-10 flex flex-col lg:flex-row gap-8">
        {/* Main Service Details */}
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">
            {service.title}
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            {service.description} <br /> <br />
            {service.detailedDescription}
          </p>

          {/* Service Offerings */}
          <div className="space-y-4">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all transform hover:scale-105 cursor-pointer"
              >
                <p className="text-gray-700 text-md">{item}</p>
              </div>
            ))}
          </div>

          {/* Outcome Section */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-blue-600">Outcome:</strong>{" "}
              {service.outcome}
            </p>
          </div>
        </div>

        {/* Sidebar - Other Services */}
        <div className="lg:w-1/4 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Other Services
          </h2>
          <div className="flex flex-col gap-1">
            {updatedServices.map((s) => (
              <Link key={s.path} to={`/service/${s.path}`} className="my-1">
                <div
                  className={`p-4 rounded-md text-center font-semibold transition-all cursor-pointer ${
                    s.path === path
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {s.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
