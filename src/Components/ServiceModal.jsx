import React from "react";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 ">
      <div className="bg-white   shadow-lg w-screen h-screen overflow-y-auto relative p-8">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="sm:p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            {service.title}
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            {service.description} <br /> <br /> {service.detailedDescription}
          </p>
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
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-blue-600">Outcome:</strong>{" "}
              {service.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
