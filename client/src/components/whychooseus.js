import React from 'react';
// import { Box, Typography, Card, CardContent } from '@mui/material';
import FastDeliveryIcon from '@mui/icons-material/LocalShipping'; // Example icon
import PriceCheckIcon from '@mui/icons-material/PriceCheck'; // Example icon
import VerifiedIcon from '@mui/icons-material/Verified'; // Example icon
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Example icon
import { Box, Typography, Grid } from "@mui/material";
import { WorkspacePremium, BusinessCenter, LocalShipping } from "@mui/icons-material";

const UspsSection = () => {
  return (
<Box sx={{ backgroundColor: "#0D6EFD", color: "white", py: 6, px: 3 }}>
      {/* Heading */}
      <Typography variant="h4" align="center" fontWeight="bold">
        Why choose us?
      </Typography>
      <Typography align="center" sx={{ mb: 5, opacity: 0.8 }}>
        Hendrerit felis libero leo tortor tristique. Nisi nisi eleifend.
      </Typography>

      {/* Three Columns Section */}
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <WorkspacePremium sx={{ fontSize: 50, color: "white" }} />
          <Typography variant="h6" fontWeight="bold" mt={1}>
            Lorem Ipsum
          </Typography>
          <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
            Tortor scelerisque rhoncus bibendum ut tellus diam porta condimentum. 
            Tortor arcu interdum orci dictum laoreet viverra.
          </Typography>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} md={4} textAlign="center" sx={{ mt: { md: 6, xs: 0 } }}>
        <BusinessCenter sx={{ fontSize: 50, color: "white" }} />
          <Typography variant="h6" fontWeight="bold" mt={2}>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Id velit sit velit nisi
            </span>
          </Typography>
          <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
            No need to search anywhere else. The biggest names in travel are right here.
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <LocalShipping sx={{ fontSize: 50, color: "white" }} />
          <Typography variant="h6" fontWeight="bold" mt={1}>
            Dictumst Proin
          </Typography>
          <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
            Quis morbi elementum et aliquet auctor non nisl pharetra ut. 
            Eget enim tellus nulla iaculis rhoncus. Ut nibh.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UspsSection;
