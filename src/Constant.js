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
import {
  FaChartLine,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaGlobe,
  FaPalette,
  FaCloud,
  FaNetworkWired,
  FaBrain,
  FaVrCardboard,
  FaBitcoin,
  FaGamepad,
  FaCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";

export const routes = [
  { path: "/", name: "HOME" },
  { path: "/about-us", name: "ABOUT US" },
  { path: "/services", name: "SERVICES" },
];
export const clientDetails = {
  email: "info@haasa.ai",
  phone: "+91-9866525099",
};
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

export const updatedServices = [
  {
    title: "Data Analytics & Business Intelligence",
    path: "data-analytics-and-business-intelligence",
    icon: <FaChartLine className="text-white text-3xl" />,
    description:
      "In today’s competitive business landscape, data is a key asset that can unlock untapped opportunities. Data Analytics & Business Intelligence (BI) services help companies extract actionable insights from complex data sets, transforming raw data into valuable business intelligence.",
    detailedDescription: `Our experts assist in designing robust data strategies that not only organize but also analyze and visualize data for enhanced decision-making. We integrate cutting-edge BI tools, ensuring your company can extract real-time insights and predictive analytics, ultimately giving you the power to anticipate market shifts and improve operational efficiency.
`,
    services: [
      "Data Strategy Development: We create data strategies that align with your business goals.",
      "Data Integration & Visualization: Integrating disparate data sources and presenting them in intuitive dashboards.",
      "Advanced Analytics & Reporting: Using predictive analytics to forecast trends and outcomes, improving strategic decisions.",
      "Real-Time Analytics: Empowering teams to make informed decisions faster by utilizing real-time data analytics.",
    ],
    outcome:
      "Our data-driven solutions empower organizations to stay ahead of competition, optimize performance, and improve customer satisfaction.",
  },
  {
    title: "Artificial Intelligence (AI)",
    path: "artificial-intelligence-ai",
    icon: <FaRobot className="text-white text-3xl" />,
    description:
      "Artificial Intelligence is transforming industries by automating tasks, analyzing large data sets, and making intelligent decisions. Our AI Services help organizations integrate the latest AI technologies to enhance business operations and customer experiences.",
    detailedDescription: `We leverage AI to solve complex business problems, from customer service automation to intelligent product recommendations. Our solutions focus on making processes smarter and more efficient by enabling machines to learn and adapt from data.`,
    services: [
      "Machine Learning: Tailoring custom algorithms that allow systems to improve from experience.",
      "Natural Language Processing (NLP): Enhancing customer interactions through intelligent chatbots and virtual assistants.",
      "Predictive Analytics: Forecasting trends and making smarter business decisions with AI-powered insights.",
      "Robotic Process Automation (RPA): Automating repetitive tasks to save time and resources.",
    ],
    outcome:
      "Our AI-driven solutions aim to revolutionize how you operate, increasing your agility, efficiency, and competitive edge.",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    path: "mobile-app-development-ios-android",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    description:
      "In a mobile-first world, providing seamless, fast, and functional apps is critical. Our Mobile App Development services focus on delivering high-performance applications for iOS and Android devices, designed to enhance user engagement and drive business success.",
    detailedDescription: `We work closely with you to develop apps that are not only intuitive and engaging but also feature robust back-end support to ensure scalability and performance. Whether you're looking for native or cross-platform apps, we have the expertise to deliver top-tier solutions.`,
    services: [
      "Custom iOS & Android Apps: Tailored solutions to suit your unique business needs, from concept to deployment.",
      "Cross-Platform Development: Using frameworks like Flutter or React Native to build apps that work seamlessly on both platforms.",
      "App UI/UX Design: Ensuring your app is visually appealing and user-friendly.",
      "App Maintenance & Support: Ongoing support to ensure your app stays updated, secure, and relevant in the market.",
    ],
    outcome:
      "We ensure your mobile apps are built to engage users, enhance customer experience, and drive measurable results.",
  },
  {
    title: "Application Development",
    path: "application-development",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    description:
      "Custom Application Development allows businesses to build solutions that are perfectly suited to their internal processes and customer needs. Our approach is tailored to create applications that are scalable, secure, and seamlessly integrate with your existing systems.",
    detailedDescription: `We take time to understand your challenges, objectives, and audience, crafting applications that help streamline operations, reduce costs, and improve productivity. Our agile development process ensures we can quickly adapt and refine solutions as your business needs evolve.
`,
    services: [
      "Custom Software Solutions: Building bespoke applications that meet the unique needs of your business.",
      "Enterprise Solutions: Developing scalable applications that support your organization’s growth.",
      "Cloud Integration: Creating cloud-based applications that ensure flexibility, scalability, and real-time collaboration.",
      "Cross-Platform Development: Building apps that work seamlessly across various devices and platforms.",
    ],
    outcome:
      "We bring the flexibility and power of custom applications to businesses seeking to optimize their operations.",
  },
  {
    title: "Web Development (Full Stack)",
    path: "web-development-full-stack",
    icon: <FaGlobe className="text-white text-3xl" />,
    description:
      "Your website is often the first point of contact for potential customers, and it needs to leave a lasting impression. Our Full-Stack Web Development services cover both front-end and back-end development, ensuring your web applications are functional, secure, and user-friendly.",
    detailedDescription: `We provide a comprehensive suite of services, from initial consultation and design to development, testing, and maintenance. Our expert developers work with the latest technologies and frameworks to ensure your website meets your business needs and adapts to future trends.
`,
    services: [
      "Front-End Development: Crafting visually engaging and responsive designs to enhance user experience.",
      "Back-End Development: Building powerful back-end architectures to support complex functionality.",
      "E-commerce Solutions: Building secure, scalable e-commerce platforms that drive sales and customer engagement.",
      "SEO Optimization: Ensuring your website is optimized for search engines, improving visibility and organic reach.",
    ],
    outcome:
      "With full-stack expertise, we create dynamic, secure, and future-proof websites tailored to your business goals.",
  },
  {
    title: "UI/UX Design",
    path: "ui-ux-design",
    icon: <FaPalette className="text-white text-3xl" />,
    description:
      "User Interface (UI) and User Experience (UX) are critical to delivering digital products that are both functional and enjoyable. Our UI/UX Design Services focus on creating engaging designs that meet the needs of your users while aligning with your brand identity.",
    detailedDescription: `We take a user-centered approach to design, ensuring your product is not only aesthetically appealing but also intuitive, easy to navigate, and effective in meeting user goals.
`,
    services: [
      "User Research & Persona Creation: Understanding your target audience and their behavior to create personas and informed design decisions.",
      "Wireframing & Prototyping: Visualizing the structure of your product early on to streamline development and gather feedback.",
      "UI Design: Crafting clean, visually appealing interfaces that support seamless interaction.",
      "Usability Testing: Conducting testing with real users to ensure your design is intuitive and user-friendly.",
    ],
    outcome:
      "Our goal is to help you create products that not only look great but provide meaningful, memorable user experiences.",
  },
  {
    title: "Cloud Computing Services",
    icon: <FaCloud className="text-white text-3xl" />,
    path: "cloud-computing-services",
    description:
      "Cloud computing offers flexibility, scalability, and cost-efficiency, and our Cloud Computing Services are designed to help your business leverage these advantages. We assist in migrating your infrastructure to the cloud, ensuring enhanced security, performance, and accessibility.",
    detailedDescription: `Whether you need infrastructure as a service (IaaS), platform as a service (PaaS), or software as a service (SaaS), we provide end-to-end cloud solutions that allow your business to scale quickly and securely.`,
    services: [
      "Cloud Strategy & Consulting: Helping you choose the right cloud provider and build a tailored strategy.",
      "Cloud Migration: Smoothly transitioning your data and applications to the cloud with minimal disruption.",
      "Cloud Security & Compliance: Ensuring your cloud environment meets industry standards and regulations for data security.",
      "Cloud App Development: Developing scalable and secure applications in the cloud.",
    ],
    outcome:
      "With our cloud solutions, you can enjoy lower IT costs, improved efficiency, and better business continuity.",
  },
  {
    title: "Internet of Things (IoT) Development",
    path: "internet-of-things-iot-development",
    icon: <FaNetworkWired className="text-white text-3xl" />,
    description:
      "The Internet of Things (IoT) is rapidly changing the way businesses collect, analyze, and act on data. Our IoT development services help businesses design and implement connected devices that gather data and trigger actions to streamline operations and improve decision-making.",
    detailedDescription: `We help organizations integrate IoT into their processes, creating connected ecosystems that boost efficiency and enable real-time monitoring and control.
`,
    services: [
      "Custom IoT Solutions: Building tailor-made IoT devices and platforms to meet specific business needs.",
      "IoT Device Management: Ensuring your IoT devices are secure, scalable, and capable of seamless communication.",
      "Data Analytics & Insights: Leveraging IoT data to uncover actionable insights for better decision-making.",
      "IoT Integration: Integrating IoT devices with existing systems and platforms for enhanced business intelligence.",
    ],
    outcome:
      "Our IoT solutions enable businesses to collect real-time data, automate processes, and provide better services to customers.",
  },
  {
    title: "Machine Learning",
    path: "machine-learning",
    icon: <FaBrain className="text-white text-3xl" />,
    description:
      "Machine Learning (ML) is revolutionizing industries by enabling machines to automatically learn from data and improve over time. Our Machine Learning Services help businesses unlock the power of AI to make smarter decisions, automate processes, and improve customer experience.",
    detailedDescription: `We build custom ML models that can be tailored to solve your specific business challenges, whether it’s predicting customer behavior, improving sales, or optimizing operations.
`,
    services: [
      "Custom ML Solutions: Designing machine learning models suited to your business challenges.",
      "Predictive Analytics: Using ML to predict trends, customer behavior, and outcomes.",
      "Natural Language Processing (NLP): Enabling machines to understand, interpret, and respond to human language.",
      "Recommendation Systems: Creating recommendation engines to personalize user experiences and drive engagement.",
    ],
    outcome:
      "With our machine learning expertise, we empower businesses to embrace the future of intelligent automation and data-driven decisions.",
  },
  {
    title: "AR & VR Development",
    path: "ar-and-vr-development",
    icon: <FaVrCardboard className="text-white text-3xl" />,
    description:
      "Augmented Reality (AR) and Virtual Reality (VR) are transforming the way people interact with digital content. We specialize in creating immersive, interactive AR and VR experiences that engage users in entirely new ways.",
    detailedDescription: `Our solutions are designed to work across industries, including entertainment, healthcare, education, and real estate, creating engaging virtual environments and augmented experiences that enhance interaction and learning.
`,
    services: [
      "AR Applications: Developing apps that superimpose digital elements onto the real world for enhanced customer engagement.",
      "VR Experiences: Creating fully immersive virtual environments for training, education, or entertainment.",
      "3D Modeling & Simulation: Creating 3D models and simulations for industries like engineering and design.",
    ],
    outcome:
      "AR and VR solutions help businesses stand out by delivering innovative, unforgettable experiences that captivate and engage audiences.",
  },
  {
    title: "Blockchain Development",
    path: "blockchain-development",
    icon: <FaBitcoin className="text-white text-3xl" />,
    description:
      "Blockchain technology offers unparalleled security, transparency, and traceability. Our Blockchain Development Services help businesses build decentralized applications (dApps) that provide secure, tamper-proof solutions for data exchange, transactions, and smart contracts.",
    detailedDescription: `Whether you need a blockchain-based solution for financial services, supply chain, or digital identity management, our team will guide you through the entire process—from strategy and development to deployment.
`,
    services: [
      "Smart Contract Development: Creating self-executing contracts that automate agreements and improve efficiency.",
      "Decentralized Apps (dApps): Building secure, transparent, and decentralized applications powered by blockchain.",
      "Blockchain Consultation: Helping businesses understand how blockchain can benefit their industry and create custom solutions.",
    ],
    outcome:
      "Our blockchain solutions are designed to enhance security, reduce fraud, and streamline processes through decentralized technology.",
  },
  {
    title: "Gaming Application Development",
    path: "gaming-application-development",
    icon: <FaGamepad className="text-white text-3xl" />,
    description:
      "The gaming industry is booming, and we’re here to help you capitalize on it. Our Gaming Application Development services focus on creating engaging, interactive, and high-performance gaming applications for a range of platforms, including mobile, PC, and consoles.",
    detailedDescription: `Whether you’re looking to develop an action-packed mobile game or an immersive VR experience, our team will bring your vision to life with cutting-edge technologies.
`,
    services: [
      "Mobile & Console Game Development: Crafting engaging games for a variety of platforms with a focus on user experience.",
      "Game Design & Prototyping: Helping you shape your game idea into a fully-realized concept, from story to gameplay mechanics.",
      "Multiplayer & Online Features: Developing multiplayer systems and cloud-based features for connected gaming experiences.",
    ],
    outcome:
      "We specialize in building fun, exciting, and innovative games that keep players engaged and entertained.",
  },
  {
    title: "Chatbot Development",
    path: "chatbot-development",
    icon: <FaCommentDots className="text-white text-3xl" />,
    description:
      "Chatbots are transforming customer interactions, providing instant responses and enhancing user experiences. Our Chatbot Development services focus on building intelligent, conversational bots that are tailored to your business needs.",
    detailedDescription: `Whether it’s for customer service, sales, or lead generation, we develop chatbots that provide efficient, 24/7 communication, boosting customer satisfaction and engagement.
`,
    services: [
      "AI-Powered Chatbots: Creating smart bots that learn and improve over time.",
      "E-commerce & Sales Bots: Helping drive sales through automated product recommendations and assistance.",
      "Custom Integration: Ensuring your chatbot integrates with your existing platforms like websites, social media, and mobile apps.",
    ],
    outcome:
      "Our chatbots help improve customer service, reduce costs, and enhance user experience.",
  },
  {
    title: "AI Calling Agency Services",
    path: "ai-calling-agency-services",
    icon: <FaPhoneAlt className="text-white text-3xl" />,
    description:
      "AI Calling Agency Services use advanced AI technologies to handle high volumes of customer calls, improving efficiency and providing a more personalized experience. Our solutions help businesses automate customer support, sales calls, and service inquiries, ensuring that customer communication is seamless and efficient.",
    services: [
      "Automated Call Handling: AI-powered systems capable of managing inbound and outbound calls with natural language processing.",
      "Personalized Customer Interaction: AI algorithms that can tailor conversations based on user data, improving customer satisfaction.",
      "Call Analytics: Using AI to analyze call data and gain insights into customer behavior and preferences.",
    ],
    outcome:
      "Our AI calling services help businesses reduce operational costs while improving the quality and responsiveness of customer interactions.",
  },
];
