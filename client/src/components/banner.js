"use client";
import Slider from "react-slick";
import Link from "next/link";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"; 

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", left: "10px", zIndex: 1 }} // Customize styles here
//       onClick={onClick}
//     >
//       {/* <ArrowBackIos style={{ fontSize: 30, color: "black" }} /> Custom Icon */}
//     </div>
//   );
// };

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", right: "10px", zIndex: 1 }} // Customize styles here
//       onClick={onClick}
//     >
//       {/* <ArrowForwardIos style={{ fontSize: 30, color: "black" }} /> Custom Icon */}
//     </div>
//   );
// };

export const Banner = () => {
//   var settings = {
//     // dots: true,
//     infinite: true,
//     autoplay:true,
//     speed: 500,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />, 
//     nextArrow: <NextArrow />, 
//   };

  return (
    <div className="flex justify-center">
      {/* <Slider {...settings}> */}
        {/* <div> */}
          {/* <img src="/banner.png" alt="Banner" style={{ maxHeight: '500px', width:'96vw',backgroundSize:'contain',borderRadius:'10px'}} /> */}
          <div className="relative w-full h-[650px]">
            {/* Video Background */}
            <video 
              src="/assets/banner-bg.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Banner Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Phantom Tech
              </h1>
              <p className="text-lg md:text-xl max-w-2xl">
                Build your dream PC with the best components and expert support.
              </p>
              {/* Button with Link */}
              <Link href="/custom-pc">
                <button className="mt-6 bg-[#7819CF] hover:bg-[#6514B0] text-white px-6 py-3 rounded-lg font-semibold transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        {/* </div> */}
        {/* <div>
          <img className="rounded-lg" src="/banner.jpg" alt="Banner" style={{ height: '500px', width:'100%'}} />
        </div> */}

      {/* </Slider> */}
    </div>
  );
};
