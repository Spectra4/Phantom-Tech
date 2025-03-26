"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Bang Upin",
    role: "Pedagang Angkiran",
    review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal!",
    image: "/user1.jpg",
    background: "/bg1.jpg",
  },
  {
    id: 2,
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    review: "Makasih Phantom, aku sekarang berasa tinggal di apartemen karena barang-barang yang terlihat mewah!",
    image: "/user2.jpg",
    background: "/bg2.jpg",
  },
  {
    id: 3,
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
    image: "/user3.jpg",
    background: "/bg3.jpg",
  },
  {
    id: 4,
    name: "Ina",
    role: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
    image: "/user3.jpg",
    background: "/bg3.jpg",
  },
  {
    id: 5,
    name: "Mpok",
    role: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
    image: "/user3.jpg",
    background: "/bg3.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Testimonials = () => {
  const sliderRef = React.useRef(null);

  return (
    <>
      <div className="container mx-auto py-12 text-center relative">
        <h5 className="text-blue-600 uppercase tracking-widest">Testimonials</h5>
        <h2 className="text-3xl font-bold my-3">Our Client Reviews</h2>

        <div className="relative mx-auto mt-8">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <Slider ref={sliderRef} {...settings} className="mx-8">
            {testimonials.map((item) => (
              <div key={item.id} className="px-3">
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg h-[400px] w-full flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                  <div className="relative z-10 flex flex-col items-center p-6">
                    <div className="absolute -top-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image src={item.image} alt={item.name} width={96} height={96} className="rounded-full" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center w-10/12 relative mt-6">
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                      <p className="text-gray-800 mt-2">&quot;{item.review}&quot;</p>
                      <div className="flex justify-center mt-2">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-orange-400">
                              ★
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
