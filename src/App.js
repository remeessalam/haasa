import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import ServicePage from "./Page/ServicePage";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import ServiceDetailsPage from "./Page/ServiceDetailsPage";
import { Suspense, lazy, useState, useEffect } from "react";
import { LoadingSpinner } from "./Components/LoaderSpinner";
import LandingLayout from "./LandingLayout/LandingLayout";
import LandingPage from "./Page/LandingPage";
import Thankyou from "./Components/Thankyou";
import SimpleModal from "./Components/SimpleModal";

// Lazy load the Privacy Policy page
const PrivacyPolicyPage = lazy(() => import("./Page/PrivacyPolicyPage"));
function App() {
  const [showModal, setShowModal] = useState(false);

  // Show modal on first visit
  useEffect(() => {
    try {
      // Check if this is the first visit
      const hasVisited = localStorage.getItem("haasaVisited");
      const hasSubmitted = localStorage.getItem("haasaContactSubmitted");
      
      // If user hasn't visited before and hasn't submitted the form
      if (!hasVisited && !hasSubmitted) {
        // Set a small delay before showing the modal
        const timer = setTimeout(() => {
          setShowModal(true);
        }, 3000); // Show after 3 seconds
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error in modal display:", error);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // Store in localStorage that user has closed the modal
    localStorage.setItem("haasaVisited", "true");
  };

  AOS.init({
    once: true,
    duration: 1000,
    easing: "ease-in-out-quart",
    throttleDelay: 200,
    offset: -70,
  });
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <div className="App">
          <ScrollToTop />
          {showModal && <SimpleModal onClose={handleCloseModal} />}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/service/:path" element={<ServiceDetailsPage />} />
              <Route path="/thank-you" element={<Thankyou />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Route>
          </Routes>
          <Routes>
            <Route element={<LandingLayout />}>
              <Route
                path="/web-development"
                element={<LandingPage page="web-development" />}
              />
              <Route
                path="/app-development"
                element={<LandingPage page="app-development" />}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
