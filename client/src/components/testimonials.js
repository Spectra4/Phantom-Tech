"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Pedagang Angkiran",
    review: "I got my gaming PC built from Phantom Tech, and it’s been fantastic! Everything runs smoothly, and they delivered it on time. Totally satisfied",
    image: "/assets/user.png",
    background: "/assets/five-star-review-photo.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Ibu Rumah Tangga",
    review: "My workstation was having issues, so I contacted Phantom Tech. They fixed it quickly, and I’m back to work without any problems. Great service",
    image: "/assets/user.png",
    background: "/assets/five-star-review-photo.jpg",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Karyawan Swasta",
    review: "Phantom Tech has always been my go-to for upgrades and repairs. They always deliver quality work, and I trust them completely.",
    image: "/assets/user.png",
    background: "/assets/five-star-review-photo.jpg",
  },
  {
    id: 4,
    name: "Sneha Rao",
    role: "Karyawan Swasta",
    review: "I asked Phantom Tech for a PC that could handle both work and gaming, and they absolutely nailed it. Everything runs smoothly, and I’m loving the performance",
    image: "/assets/user.png",
    background: "/assets/five-star-review-photo.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Karyawan Swasta",
    review: "My laptop had a technical issue, and Phantom Tech fixed it in no time. The service was great, and I’m definitely coming back for future needs",
    image: "/assets/user.png",
    background: "/assets/five-star-review-photo.jpg",
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  const sliderRef = React.useRef(null);

  return (
    <div className="container mx-auto py-16 px-6 bg-[url('/assets/review-bg-02.jpg')] bg-cover bg-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        What Our Clients Say
      </motion.h2>

      <div className="relative mt-10 max-w-3xl mx-auto">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        <Slider ref={sliderRef} {...settings} className="px-4">
          {testimonials.map((item) => (
            <motion.div key={item.id} className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-full border-4 border-gray-200 shadow-md" />
                <h4 className="text-lg font-semibold text-gray-800 mt-4">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="text-gray-700 mt-3">&quot;{item.review}&quot;</p>
                <div className="flex justify-center mt-3">
                  {Array(5).fill().map((_, i) => (
                    <span key={i} className="text-orange-400">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
