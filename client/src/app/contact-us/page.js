"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-16"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }} // Add an attractive background image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        
        <motion.div 
          className="relative bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">Get in touch with us for any inquiries or support.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Section: Contact Info */}
            <div className="space-y-6">
              <ContactInfo 
                Icon={FaPhone} 
                text="+1 (123) 456-7890" 
                bgColor="bg-blue-100"
              />
              <ContactInfo 
                Icon={FaEnvelope} 
                text="support@phantomtech.com" 
                bgColor="bg-green-100"
              />
              <ContactInfo 
                Icon={FaMapMarkerAlt} 
                text="123 Tech Street, New York, USA" 
                bgColor="bg-red-100"
              />
            </div>

            {/* Right Section: Contact Form */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md w-full"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-4">
                <InputField label="Name" type="text" placeholder="Your Name" />
                <InputField label="Email" type="email" placeholder="Your Email" />
                <TextAreaField label="Message" placeholder="Your Message" />
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="mr-2" /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

/* Reusable Components */
const ContactInfo = ({ Icon, text, bgColor }) => (
  <motion.div 
    className={`flex items-center space-x-4 p-4 rounded-lg shadow ${bgColor}`}
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="text-2xl text-gray-800" />
    <span className="text-gray-700 text-lg">{text}</span>
  </motion.div>
);

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
    />
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div>
    <label className="block text-gray-700 font-medium">{label}</label>
    <textarea
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      rows="4"
    ></textarea>
  </div>
);

export default ContactUs;
