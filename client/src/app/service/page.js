// "use client";
// import React, { useState } from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { FaLaptop, FaTools, FaSyncAlt, FaCogs, FaPlusCircle, FaCalendarCheck } from "react-icons/fa";
// import { motion } from "framer-motion";

// const services = [
//   { icon: FaLaptop, title: "PC Cleaning" },
//   { icon: FaTools, title: "PC Repair" },
//   { icon: FaSyncAlt, title: "Software Installation" },
//   { icon: FaCogs, title: "Hardware Upgrade" },
//   { icon: FaPlusCircle, title: "New Product Installation" }
// ];

// const BookServicePage = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Service: ${selectedService}\nName: ${name}\nEmail: ${email}\nDate: ${date}`);
//     setSelectedService(null); // Close modal after submission
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-5">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Book a Service
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-10">
//           {services.map((service, index) => (
//             <motion.button 
//               key={index}
//               className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer w-full transition-all ${selectedService === service.title ? 'border-2 border-blue-600' : ''}`}
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedService(service.title)}
//             >
//               <service.icon className="text-5xl text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
//             </motion.button>
//           ))}
//         </div>

//         {/* Slide-in Modal */}
//         {selectedService && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50"
//             onClick={() => setSelectedService(null)} // Close modal on background click
//           >
//             <motion.div 
//               className="bg-white p-6 rounded-l-xl shadow-lg max-w-md w-full text-center relative h-screen flex flex-col justify-center"
//               initial={{ x: "100%" }} // Start from outside the screen
//               animate={{ x: 0 }} // Slide into view
//               exit={{ x: "100%" }} // Slide out when closed
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
//             >
//               {/* Close Button */}
//               <button 
//                 className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-2xl"
//                 onClick={() => setSelectedService(null)}
//               >
//                 &times;
//               </button>

//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book {selectedService}</h3>
//               <form onSubmit={handleSubmit}>
//                 <input 
//                   type="text" 
//                   placeholder="Your Name" 
//                   className="w-full p-2 border rounded-lg mb-3" 
//                   value={name} 
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//                 <input 
//                   type="email" 
//                   placeholder="Your Email" 
//                   className="w-full p-2 border rounded-lg mb-3" 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <input 
//                   type="date" 
//                   className="w-full p-2 border rounded-lg mb-4" 
//                   value={date} 
//                   onChange={(e) => setDate(e.target.value)}
//                   required
//                 />
//                 <motion.button 
//                   type="submit" 
//                   className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaCalendarCheck className="mr-2" /> Book Now
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BookServicePage;


"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaLaptop, FaTools, FaSyncAlt, FaCogs, FaPlusCircle, FaCalendarCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service: ${selectedService}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}`);
    setSelectedService(null); // Close popup after submission
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

        {/* Centered Modal */}
        <AnimatePresence>
          {selectedService && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedService(null)} // Close on background click
            >
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center relative"
                initial={{ opacity: 0, scale: 0.8 }} // Start faded & small
                animate={{ opacity: 1, scale: 1 }} // Scale up & fade in
                exit={{ opacity: 0, scale: 0.8 }} // Fade out & shrink
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                {/* Close Button */}
                <button 
                  className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-2xl"
                  onClick={() => setSelectedService(null)}
                >
                  &times;
                </button>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book {selectedService}</h3>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-2 border rounded-lg mb-3" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input 
                    type="phone" 
                    placeholder="Your Phone" 
                    className="w-full p-2 border rounded-lg mb-3" 
                    value={phone} 
                    onChange={(e) => setphone(e.target.value)}
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
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default BookServicePage;
