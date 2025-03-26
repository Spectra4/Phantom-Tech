"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BoltIcon from "@mui/icons-material/Bolt";
import Slider from "react-slick";

export const TopSellerList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
        );
        const topSellerProducts = response.data.filter(product => product.isTopSeller === true);
        setProducts(topSellerProducts);
        // console.log("Top seller product list", topSellerProducts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  return (
    <Box sx={{ backgroundColor: '#eeeeee'}}>
      <div className="container  py-5 overflow-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Top Selling Products
        </h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product._id} className="p-3">
            <Link sx={{display:"flex", justifyContent:"center"}} href={`/products/${product._id}`} passHref >
            <Card
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 5,
                paddingTop: "80px", // Push content down so image doesn’t overlap
                marginTop:"50px",
                background: "white",
                overflow: "visible", // Allows image overflow
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Centered Product Image */}
              <Box
                component="img"
                src={`${product.images[0]}`}
                alt={product.name}
                sx={{
                  position: "absolute",
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  maxWidth: "150px",
                  zIndex: 10,
                  borderRadius: "10px",
                }}
              />

              <CardContent>
                {/* Product Name */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {product.name}
                </Typography>

                {/* Star Rating */}
                <Box display="flex" gap={0.5} mt={0.5}>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} sx={{ color: "#FFD700", fontSize: 18 }} />
                  ))}
                </Box>

                {/* Price and Add to Cart */}
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={3}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through", fontWeight: "bold" }}
                >
                  ₹{product.regularPrice}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold", color: "#C00000" }}
                >
                  ₹{product.salePrice}
                </Typography>

                  <Button
                    size="small"
                    sx={{
                      minWidth: "40px",
                      height: "40px",
                      background: "#0D47A1",
                      borderRadius: "50%",
                      color: "white",
                      boxShadow: "0 3px 5px 2px rgba(21, 101, 192, .3)",
                      "&:hover": {
                        background: "#1565C0",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
            </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};
