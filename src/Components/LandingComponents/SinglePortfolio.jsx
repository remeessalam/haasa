import { Link } from "react-router-dom";
// eslint-disable-next-line
const SinglePortfolio = ({ porfolio, portfoliofor, isWeb }) => {
  return (
    <div className="">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900 mb-4">
        {portfoliofor}
      </h2>
      <p data-aos="fade-up" className="text-gray-600 mb-8">
        {isWeb
          ? `Our web development projects showcase innovative and user-friendly
        designs that deliver exceptional digital experiences. From responsive
        layouts to seamless functionality, each project is crafted to meet the
        unique needs of our clients and their audiences.`
          : `Our app development projects showcase innovative and user-friendly designs that deliver exceptional mobile experiences. From seamless performance to intuitive interfaces, each project is crafted to meet the unique needs of our clients and their users.`}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {porfolio?.map((item) => (
          <Link
            data-aos="fade-up"
            key={item.id}
            className="bg-white rounded-lg hover:scale-105 transition-all duration-300  shadow-lg overflow-hidden"
            // to={item.link}
            to={"#"}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SinglePortfolio;
