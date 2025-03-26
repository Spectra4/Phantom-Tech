"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaTools, FaMicrochip, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const CustomPCBuild = () => {
  return (
    <>
      <Header />
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-16 text-center"
        style={{ backgroundImage: "url('/assets/custom-pc-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        
        <motion.div 
          className="relative bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <FaTools className="text-6xl text-blue-600" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Custom PC Build</h2>
          <p className="text-gray-600 mt-2">We are working hard to bring you the best custom PC building experience.</p>
          
          <div className="flex justify-center space-x-6 mt-6">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-full bg-blue-100 shadow-md"
            >
              <FaMicrochip className="text-4xl text-blue-600" />
            </motion.div>
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="p-4 rounded-full bg-green-100 shadow-md"
            >
              <FaSpinner className="text-4xl text-green-600" />
            </motion.div>
          </div>
          
          <p className="text-gray-600 mt-6">Stay tuned for updates!</p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default CustomPCBuild;