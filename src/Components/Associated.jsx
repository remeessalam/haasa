import React from "react";
import logo1 from "../assets/image/brand-logos/1.png";
import logo2 from "../assets/image/brand-logos/2.png";
import logo3 from "../assets/image/brand-logos/3.png";
import logo4 from "../assets/image/brand-logos/4.png";
import logo5 from "../assets/image/brand-logos/5.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const logos = [logo1, logo5, logo2, logo3, logo4];

const animation = { duration: 10000, easing: (t) => t };

const AssociatedWith = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="pt-[4rem] w-full max-w-screen overflow-hidden flex flex-col items-center relative bg-bgcolor">
      <div className=" flex flex-col items-center">
        {/* <div className="blurred-blue right-[-10%] bottom-[-10%] -z-10"></div> */}
        <h2 data-aos="fade-up" className="section-name ">
          Associated With
        </h2>

        <h2 className="main-heading py-2" data-aos="fade-up">
          Our Growth Enablers
        </h2>

        <div
          ref={sliderRef}
          className="keen-slider wrapper mt-[3rem] pb-[4rem]"
        >
          {logos.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center bg-white px-3   rounded-2xl"
            >
              <img
                loading="lazy"
                src={img}
                width="200"
                height="100"
                alt="featured in"
                className="h-[7rem] w-[12rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedWith;
