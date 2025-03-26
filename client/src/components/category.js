"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; 
import Card from "@mui/material/Card";
import Slider from "react-slick";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
        setCategories(response.data);
        // console.log("Category data:", response.data);
      } catch (error) {
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Reduced for smoother transition
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted slightly higher than speed
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-red-500">{error}</h2>
      </div>
    );
  }


  return (
    <div className="container py-5 m-auto overflow-hidden">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id} className="p-3">
          <Link sx={{display:"flex", justifyContent:"center"}} href={`/categories/${category._id}`} passHref >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <div className="flex justify-center mb-2 m-3">
                <img
                src={`${category.image}`}
                alt={category.name}
                className="h-32 object-cover"
              />
              </div>
              <div className="text-center">
                <h5 className="text-xl font-bold text-gray-800 m-3">{category.name}</h5>
              </div>
            </Card>
          </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
