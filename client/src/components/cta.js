import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const Cta = () => {
  return (
    <div className="container py-5 overflow-hidden md:h-[530px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 10 },
            py: 5,
          }}
        >
          {/* Left Section: Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, maxWidth: { md: "50%" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box component="span" sx={{ width: 4, height: 24, bgcolor: "#aaa", mr: 1 }} /> About Us
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1, mb: 2 }}>
              Discover the key to grow your business
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            At Phantom Tech, we’re dedicated to building more than just PCs—we’re about creating exceptional experiences. 
            With years of expertise in custom PC builds, expert repairs, and high-performance upgrades, we cater to gamers, professionals, and anyone in need of tailored tech solutions. 
            Our skilled team ensures every build delivers top-notch performance, from PC cleaning and hardware upgrades to flawless software installation. We also offer fast, secure delivery to get your custom PC or upgrades safely to your doorstep. 
            Phantom Tech isn’t just a service; it’s an experience built on trust, innovation, and performance. Let us elevate your tech world.
            </Typography>

            <Button variant="contained" component={Link} href="/about" sx={{ backgroundColor: "#7819CF"}}>
              Learn More
            </Button>
          </Box>

          {/* Right Section: Overlapping Images */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              maxWidth: { md: "50%" },
              mt: { xs: 3, md: 0 },
            }}
          >
            {/* Background Image */}
            <motion.img
              src="/assets/1.jpg"
              alt="Background"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                width: "60%",
                borderRadius: "12px",
                backgroundColor: "#f5f5f5",
                boxShadow: "2px 4px 10px rgba(0,0,0,0.1)",
                position: "relative",
                zIndex: 1,
              }}
            />

            {/* Foreground Image (Overlapping) */}
            <motion.img
              src="/assets/2.jpg"
              alt="Foreground"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                width: "45%",
                borderRadius: "12px",
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                backgroundColor: "#fafafa",
                boxShadow: "3px 6px 15px rgba(0,0,0,0.15)",
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </div>
  );
};