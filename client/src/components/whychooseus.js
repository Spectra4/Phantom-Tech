"use client";
import React from "react";
import { motion } from "framer-motion";
import { WorkspacePremium, BusinessCenter, LocalShipping } from "@mui/icons-material";
import { Box, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

const UspsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Box sx={{ background: "linear-gradient(90deg, rgba(39,17,82,1) 13%, rgba(158,96,243,1) 77%)", color: "white", py: 6, px: 3 }} ref={ref}>
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
          <Box
            sx={{
              width: "100px", // Shorter line
              height: "2px",
              background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
              ml: 2
            }}
          />
          <Typography variant="h4" fontWeight="bold" sx={{ mx: 2 }}>
            Why choose us
          </Typography>
          <Box
            sx={{
              width: "100px", // Shorter line
              height: "2px",
              background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
              mr: 2
            }}
          />
        </Box>
          <Typography align="center" sx={{ mb: 5, opacity: 0.8 }}>
            Hendrerit felis libero leo tortor tristique. Nisi nisi eleifend.
          </Typography>
        </motion.div>

        {/* Three Columns Section */}
        <Grid container spacing={3} justifyContent="center">
          {/* Left Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <WorkspacePremium sx={{ fontSize: 50, color: "white" }} />
              <Typography variant="h6" fontWeight="bold" mt={1}>
                Lorem Ipsum
              </Typography>
              <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
                Tortor scelerisque rhoncus bibendum ut tellus diam porta condimentum. 
                Tortor arcu interdum orci dictum laoreet viverra.
              </Typography>
            </motion.div>
          </Grid>

          {/* Center Section */}
          <Grid item xs={12} md={4} textAlign="center" sx={{ mt: { md: 6, xs: 0 } }}>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <BusinessCenter sx={{ fontSize: 50, color: "white" }} />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                  Id velit sit velit nisi
                </span>
              </Typography>
              <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
                No need to search anywhere else. The biggest names in travel are right here.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <LocalShipping sx={{ fontSize: 50, color: "white" }} />
              <Typography variant="h6" fontWeight="bold" mt={1}>
                Dictumst Proin
              </Typography>
              <Typography sx={{ opacity: 0.8, px: { xs: 2, md: 5 } }}>
                Quis morbi elementum et aliquet auctor non nisl pharetra ut. 
                Eget enim tellus nulla iaculis rhoncus. Ut nibh.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UspsSection;
