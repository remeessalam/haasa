import { useState } from "react";
import { Link } from "react-scroll";

export default function Scroller() {
  const [selected, setSeleted] = useState(1);
  const sections = [
    { id: 1, title: "Our Services", path: "service", offset: -70 },
    { id: 2, title: "Industry ", path: "industry", offset: -100 },
    { id: 3, title: "About Us", path: "about", offset: -70 },
    { id: 4, title: "Our Values", path: "values", offset: -40 },
    { id: 5, title: "Testimonials", path: "reviews", offset: -70 },
    { id: 6, title: "Contact Us", path: "contactus", offset: -70 },
  ];

  return (
    <div className="hidden lg:flex z-40">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-full flex items-center px-4">
        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <Link
              key={section.id}
              to={section.path}
              spy={true}
              smooth={true}
              duration={500}
              offset={section.offset}
              className="group relative flex items-center cursor-pointer"
              onClick={() => setSeleted(section.id)}
            >
              <div
                className={`w-12 h-12 relative rounded-full flex items-center justify-center transition-colors
                    ${
                      section.id === selected
                        ? "bg-[#ffa726]"
                        : "bg-white group-hover:bg-[#4b4373] border  border-secondary"
                    }`}
              >
                <div
                  className={`absolute border-r border-2 transition-all duration-300 ${
                    section.id === selected
                      ? `border-secondary`
                      : `border-secondary/40`
                  } h-[5rem] -z-[1]`}
                />
                <span
                  className={`${
                    section.id === selected ? `text-white` : `text-secondary`
                  } font-bold group-hover:text-white`}
                >
                  {section.id}
                </span>
              </div>
              {section.id === selected && (
                <span className="ml-3 text-[#ffa726] whitespace-nowrap text-wrap max-w-14">
                  {section.title}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* <div className="flex-1 ml-24">
        {sections.map((section) => (
          <section
            key={section.id}
            id={`section-${section.id}`}
            className="h-screen flex items-center justify-center text-white text-2xl"
          >
            <h2>{section.title}</h2>
          </section>
        ))}
      </div> */}
    </div>
  );
}
