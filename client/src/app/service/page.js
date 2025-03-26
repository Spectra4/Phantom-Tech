"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaLaptop, FaTools, FaSyncAlt, FaCogs, FaPlusCircle, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: FaLaptop, title: "PC Cleaning" },
  { icon: FaTools, title: "PC Repair" },
  { icon: FaSyncAlt, title: "Software Installation" },
  { icon: FaCogs, title: "Hardware Upgrade" },
  { icon: FaPlusCircle, title: "New Product Installation" }
];

const BookServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service: ${selectedService}\nName: ${name}\nEmail: ${email}\nDate: ${date}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-5">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book a Service
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-10">
          {services.map((service, index) => (
            <motion.button 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer w-full transition-all ${selectedService === service.title ? 'border-2 border-blue-600' : ''}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service.title)}
            >
              <service.icon className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </motion.button>
          ))}
        </div>

        {selectedService && (
          <motion.form 
            className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book {selectedService}</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-2 border rounded-lg mb-3" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-2 border rounded-lg mb-3" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="date" 
              className="w-full p-2 border rounded-lg mb-4" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <motion.button 
              type="submit" 
              className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarCheck className="mr-2" /> Book Now
            </motion.button>
          </motion.form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookServicePage;