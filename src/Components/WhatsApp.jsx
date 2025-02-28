import { Link } from "react-router-dom";
import whatsappIcon from "../assets/svgs/WhatsappIcon.svg";
import { FaWhatsapp } from "react-icons/fa";
import { clientDetails } from "../Constant";
const WhatsApp = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] p-[0.3rem]  z-30 border border-green-600 bg-green-600 rounded-full right-[1.5rem] transition-all duration-200"
      to={clientDetails.whatsapplink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      {/* <WhatsApp className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" /> */}
      <FaWhatsapp className="w-[2.5rem] h-[2rem] sm:w-[2rem] sm:h-[2rem] text-white" />

      {/* <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300"
      /> */}
    </Link>
  );
};

export default WhatsApp;
