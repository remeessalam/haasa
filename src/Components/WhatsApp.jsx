import { Link } from "react-router-dom";
import whatsappIcon from "../assets/svgs/WhatsappIcon.svg";
import { FaWhatsapp } from "react-icons/fa";
const WhatsApp = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] p-3 hover:-translate-y-1 z-30 border border-white bg-white rounded-full right-[1.5rem] transition-all duration-200"
      to={``}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      {/* <WhatsApp className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" /> */}
      <FaWhatsapp className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] text-secondary" />

      {/* <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300"
      /> */}
    </Link>
  );
};

export default WhatsApp;
