import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const Cta = () => {
  return (
    <div className="container py-5 overflow-hidden md:h-[530px]">
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 10 }, // Adds left & right spacing
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

        <Typography variant="body1" color="text.secondary">
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
          Sodales tellus nunc posuere lorem laoreet egestas rhoncus quis. 
          Arcu velit diam pretium tincidunt mauris ante aliquam ultricies ut
        </Typography>
      </Box>

      {/* Right Section: Overlapping Images */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          maxWidth: { md: "50%" }, // Limits image container width
          mt: { xs: 3, md: 0 },
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src="background.jpg"
          alt="Background"
          sx={{
            width: { xs: 200, sm: 250, md: 300 },
            height: { xs: 200, sm: 250, md: 300 },
            borderRadius: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: 1,
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Foreground Image (Overlapping) */}
        <Box
          component="img"
          src="foreground.jpg"
          alt="Foreground"
          sx={{
            width: { xs: 150, sm: 200, md: 250 },
            height: { xs: 150, sm: 200, md: 250 },
            borderRadius: 2,
            position: "absolute",
            bottom: { xs: "-50px", md: "-100px" },
            right: { xs: "-70px", md: "-20px" },
            backgroundColor: "#fafafa",
            boxShadow: 3,
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
    </div>
  );
};
