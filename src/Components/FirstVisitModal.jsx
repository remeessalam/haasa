import React, { useState, useEffect } from "react";
import GetInTouchModal from "./GetInTouchModal";

const FirstVisitModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      // For testing - clear the localStorage values
      localStorage.removeItem("haasaVisited");
      localStorage.removeItem("haasaContactSubmitted");
      
      // Check if this is the first visit
      const hasVisited = localStorage.getItem("haasaVisited");
      const hasSubmitted = localStorage.getItem("haasaContactSubmitted");
      
      console.log("First visit check:", { hasVisited, hasSubmitted });
      
      // If user hasn't visited before and hasn't submitted the form
      if (!hasVisited && !hasSubmitted) {
        // Set a small delay before showing the modal
        const timer = setTimeout(() => {
          console.log("Showing modal now");
          setShowModal(true);
          // Mark that the user has visited
          localStorage.setItem("haasaVisited", "true");
        }, 3000); // Show after 3 seconds
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error in FirstVisitModal:", error);
      // If localStorage is not available, show the modal anyway
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <GetInTouchModal onClose={handleCloseModal} />}
    </>
  );
};

export default FirstVisitModal;