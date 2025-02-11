import {
  FaLightbulb,
  FaStar,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaSearch,
  FaEdit,
  FaCode,
  FaCog,
} from "react-icons/fa";

export const routes = [
  { path: "/", name: "HOME" },
  { path: "/about-us", name: "ABOUT US" },
  { path: "/services", name: "SERVICES" },
];

export const industries = [
  {
    title: "Healthcare",
    description:
      "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
    isHighlighted: false,
  },
  {
    title: "E-commerce & Retail",
    description:
      "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
    isHighlighted: true,
  },
  {
    title: "Finance & Banking",
    description:
      "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
    isHighlighted: false,
  },
  {
    title: "Energy",
    description:
      "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
    isHighlighted: false,
  },
  {
    title: "Real Estate",
    description:
      "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
    isHighlighted: false,
  },
  {
    title: "Manufacturing",
    description:
      "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
    isHighlighted: false,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
    isHighlighted: false,
  },
  {
    title: "Education",
    description:
      "Personalized learning experiences, predictive analytics for student outcomes, & automated administrative processes using AI and ML.",
    isHighlighted: false,
  },
  {
    title: "Telecom",
    description:
      "Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
    isHighlighted: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    img: require("./assets/image/testimonials/review-p1.png"),
    designation: "CEO of TechNext Solutions",
    review:
      "AI Company transformed the way we handle our data analytics. Their AI and machine learning solutions have not only improved our efficiency but also provided us with deep insights that we never had before. Their team is professional, responsive, and innovative.",
  },
  {
    id: 2,
    name: "Samantha Green",
    img: require("./assets/image/testimonials/review-p2.png"),
    designation: "CTO of FinServ Global",
    review:
      "The blockchain solutions developed by AI Company have been a game-changer for our financial services. The implementation was seamless, and we’ve noticed enhanced security and transparency in our transactions. Highly recommend them for any blockchain needs!",
  },
  {
    id: 3,
    name: "Mark Davis",
    img: require("./assets/image/testimonials/review-p3.png"),
    designation: "COO of E-Commerce Hub",
    review:
      "We partnered with AI Company for custom web and mobile app development, and they exceeded our expectations. Their attention to detail, creativity, and commitment to delivering on time was remarkable. The app is user-friendly and has significantly improved our customer engagement.",
  },
  {
    id: 4,
    name: "Lisa Wong",
    img: require("./assets/image/testimonials/review-p4.png"),
    designation: "IT Director at Global Enterprises",
    review:
      "The cybersecurity solutions provided by AI Company have given us peace of mind. They thoroughly assessed our infrastructure and implemented advanced threat detection and encryption technologies that protect our sensitive data. Their expertise is second to none!",
  },
  {
    id: 5,
    name: "David Thompson",
    img: require("./assets/image/testimonials/review-p5.png"),
    designation: "HR Director at HealthCare Innovators",
    review:
      "Our collaboration with AI Company on VR development has opened new doors for our training programs. Their VR simulations are incredibly realistic and have helped us provide more effective and engaging training sessions for our employees.",
  },
];

export const values = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We stay at the forefront of technology and continuously seek new, more effective ways to address challenges.",
  },
  {
    icon: <FaStar className="w-8 h-8" />,
    title: "Quality",
    description:
      "We are committed to delivering the highest quality solutions that not only meet but exceed expectations.",
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Integrity",
    description:
      "We conduct our business with honesty, respect, and transparency, building long-term relationships based on trust.",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Collaboration",
    description:
      "We believe in working as a team with both our clients and our internal teams to deliver the best possible results.",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Agility",
    description:
      "In a rapidly changing world, we are flexible and adaptable, ensuring that our solutions remain relevant and impactful.",
  },
];

export const workProcess = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "Discovery & Consultation",
    description:
      "We start by gaining a deep understanding of your business, challenges, and goals, ensuring we provide the most effective solution.",
  },
  {
    icon: <FaEdit className="w-8 h-8" />,
    title: "Planning & Strategy",
    description:
      "After understanding your needs, we develop a detailed strategy, including timelines, budgets, and deliverables.",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Design & Development",
    description:
      "We get to work on crafting a solution that meets your requirements, with regular feedback loops to ensure alignment with your vision.",
  },
  {
    icon: <FaCog className="w-8 h-8" />,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your solution performs flawlessly across all scenarios.",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Deployment",
    description:
      "We carefully launch your solution, ensuring a smooth transition and minimal disruption.",
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Support & Maintenance",
    description:
      "Our commitment continues with ongoing support and maintenance to keep your solution running optimally.",
  },
];

export const allServices = [
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Transform your data into actionable insights with HAASA AI's analytics and business intelligence solutions.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "Streamline operations and enhance decision-making with HAASA AI's customized AI solutions.",
    bgColor: "bg-[#4527A0]",
    textColor: "text-white",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Build engaging, high-performance mobile apps with HAASA AI for both iOS and Android platforms.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Application Development",
    description:
      "Develop reliable, secure, and custom applications tailored to your business needs with HAASA AI.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Cloud Computing Services",
    description:
      "Scale your business with our robust cloud computing solutions and expert management.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with our comprehensive cybersecurity services and solutions.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "IoT Solutions",
    description:
      "Connect and optimize your devices with our innovative IoT solutions and platforms.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Blockchain Development",
    description:
      "Implement secure and transparent blockchain solutions for your business processes.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "DevOps Services",
    description:
      "Streamline your development and operations with our efficient DevOps practices.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure software reliability with our comprehensive testing and QA services.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "UI/UX Design",
    description:
      "Create engaging user experiences with our professional UI/UX design services.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "IT Consulting",
    description:
      "Get expert guidance for your technology initiatives and digital transformation.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Big Data Solutions",
    description:
      "Harness the power of big data with our advanced analytics and processing solutions.",
    bgColor: "bg-[#F8E7FF]",
  },
  {
    title: "Machine Learning",
    description:
      "Implement intelligent automation with our cutting-edge machine learning solutions.",
    bgColor: "bg-[#F8E7FF]",
  },
];
