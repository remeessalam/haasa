import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { clientDetails } from '../Constant';
import toast from 'react-hot-toast';

const SimpleModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  // Animation sequence
  useEffect(() => {
    // First make the backdrop visible with opacity transition
    setIsVisible(true);
    
    // Then animate in the content after a short delay
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle closing with animation
  const handleClose = () => {
    setContentVisible(false);
    
    // Wait for content animation to finish before closing backdrop
    setTimeout(() => {
      setIsVisible(false);
      
      // Wait for backdrop animation to finish before unmounting
      setTimeout(() => {
        onClose();
      }, 300);
    }, 300);
  };
  
  const onSubmit = async (values) => {
    const emailBody = `Name: ${values.name}\n\nEmail: ${values.email}\n\nPhone: ${values.phone}\n\nMessage:\n${values.message}`;

    const payload = {
      to: clientDetails.email,
      name: "Haasa",
      subject: "New Contact Request from Website Popup",
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Thank you for contacting us! We'll get back to you soon.");
        reset();
        localStorage.setItem("haasaContactSubmitted", "true");
        handleClose();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '28rem',
          margin: '0 1rem',
          position: 'relative',
          padding: '1.5rem',
          maxHeight: '90vh',
          overflowY: 'auto',
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '1.5rem',
            color: '#4b5563',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            transition: 'transform 0.2s ease, color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.color = '#1f2937';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#4b5563';
          }}
        >
          &times;
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0C258B' }}>Get In Touch With Us</h2>
          <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#818181', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              Name
            </label>
            <input
              type="text"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '0.375rem', 
                border: '1px solid #d1d5db' 
              }}
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#818181', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              Email
            </label>
            <input
              type="email"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '0.375rem', 
                border: '1px solid #d1d5db' 
              }}
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#818181', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              Phone
            </label>
            <input
              type="tel"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '0.375rem', 
                border: '1px solid #d1d5db' 
              }}
              placeholder="Your Phone Number"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#818181', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              Message
            </label>
            <textarea
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '0.375rem', 
                border: '1px solid #d1d5db',
                height: '6rem' 
              }}
              placeholder="How can we help you?"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#0C258B',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1e40af';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0C258B';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleModal;