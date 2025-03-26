// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { useEffect, useState, useCallback } from "react";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import {
//   AppBar,
//   Toolbar,
//   InputBase,
//   IconButton,
//   CircularProgress,
//   Button,
//   Box,
//   useMediaQuery,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// const Header = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const [isMounted, setIsMounted] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);

//   useEffect(() => setIsMounted(true), []);

//   const handleSearch = useCallback(async () => {
//     if (!searchTerm) {
//       setSearchResults([]);
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data } = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?search=${searchTerm}`
//       );
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Search error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       handleSearch();
//     }, 500);
//     return () => clearTimeout(delayDebounce);
//   }, [searchTerm, handleSearch]);

//   return (
//     <header className="container">
//       <AppBar
//         position="static"
//         elevation={0}
//         sx={{ background: "#fff", padding: "8px 0px" }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//           }}
//         >
//           {/* Logo */}
//           <Link href="/">
//             <Box
//               component="img"
//               src="/logo.png"
//               alt="Logo"
//               sx={{ width: isMobile ? 60 : 90, objectFit: "contain" }}
//             />
//           </Link>

//           {/* Search Bar */}
//           <Box
//             sx={{
//               position: "relative",
//               width: { xs: "60%", sm: "50%" },
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <InputBase
//               placeholder="Search Products …"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               sx={{
//                 backgroundColor: "#e0e0e0",
//                 // borderRadius: 50,
//                 padding: "8px 16px",
//                 width: "100%",
//                 pr: 5, // Add right padding to make space for the search icon
//               }}
//               inputProps={{ "aria-label": "search" }}
//             />
//             <IconButton
//               sx={{
//                 position: "absolute",
//                 right: 4, // Adjust as necessary to bring it closer to the edge
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 color: "#fff",
//                 background: "linear-gradient(45deg, #D32F2F 30%, #C00000 90%)",
//                 borderRadius: 0, // Add this line to remove the border radius
//               }}
//               onClick={handleSearch}
//             >
//               {loading ? <CircularProgress size={24} /> : <SearchIcon />}
//             </IconButton>

//             {/* Search Results Dropdown */}
//             {searchResults.length > 0 && searchTerm && (
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: "100%",
//                   marginTop: 1,
//                   width: "100%",
//                   backgroundColor: "white",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   zIndex: 10,
//                   maxHeight: 240,
//                   overflowY: "auto",
//                 }}
//               >
//                 {searchResults.map((product) => (
//                   <Link
//                     href={`/products/${product._id}`}
//                     key={product._id}
//                     legacyBehavior
//                   >
//                     <a
//                       style={{
//                         display: "flex",
//                         padding: "8px",
//                         color: "#4a4a4a",
//                         textDecoration: "none",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={`${product.images[0]}`}
//                         alt={product.name}
//                         sx={{
//                           width: 28,
//                           height: 28,
//                           objectFit: "cover",
//                           borderRadius: 1,
//                           marginRight: 1,
//                         }}
//                       />
//                       {product.name}
//                     </a>
//                   </Link>
//                 ))}
//               </Box>
//             )}
//           </Box>

//           {/* Cart Icon */}
//           <IconButton
//             color="inherit"
//             sx={{ color: "black", width: "50px", height: "50px" }}
//           >
//             <Link href="/cart" style={{ position: "relative" }}>
//               <ShoppingCartOutlinedIcon />
//               {isMounted && totalQuantity > 0 && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     right: 0,
//                     width: 16,
//                     height: 16,
//                     fontSize: 10,
//                     fontWeight: "bold",
//                     backgroundColor: "#d32f2f",
//                     color: "white",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {totalQuantity}
//                 </Box>
//               )}
//             </Link>
//           </IconButton>

//           {/* Bulk Order Button */}
//           {!isMobile && (
//             <Link href="/login" passHref>
//               <Button
//                 size="small"
//                 sx={{
//                   color: "white",
//                   background:
//                     "linear-gradient(45deg, #D32F2F 30%, #C00000 90%)",
//                   borderRadius: 25,
//                   boxShadow: "0 3px 5px 2px rgba(192, 0, 0, .3)",
//                   padding: "10px 20px",
//                   fontWeight: "bold",
//                   transition: "0.3s ease",
//                   "&:hover": {
//                     background: "linear-gradient(45deg, #B71C1C 30%, #8B0000 90%)",
//                     transform: "scale(1.05)",
//                     boxShadow: "0 5px 15px 2px rgba(128, 0, 0, .4)",
//                   },
//                 }}
//               >
//                 Login / Register
//               </Button>
//             </Link>
//           )}
//         </Toolbar>
//         {/* <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//           }}
//         >
          
//         </Toolbar> */}
//       </AppBar>
//     </header>
//   );
// };

// export default Header;


"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  CircularProgress,
  Button,
  useMediaQuery,
  Drawer,
  Menu,
  MenuItem,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import ContactUs from "@/app/contact-us/page";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => setIsMounted(true), []);

  const handleSearch = useCallback(async () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?search=${searchTerm}`
      );
      setSearchResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, handleSearch]);

  return (
    <header>
        <AppBar position="static" elevation={0} sx={{ background: "#fff", padding: "10px 0px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3 }}>
          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          {!isMobile && (
          <Link href="/" style={{ marginLeft: "70px" }}>
            <Box component="img" src="/logo.png" alt="Logo" sx={{ width: isMobile ? 60 : 90, objectFit: "contain" }} />
          </Link>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: "50px", color: "#000" }}>
              <Link href="/custom-pc">Custom PC</Link>
              <Link href="/products">Products</Link>
              <Link href="/service">Service</Link>
              <Link href="/contact-us">Contact us</Link>
              <Button variant="outlined" sx={{ borderColor: "#0057ff", color: "#0057ff", borderRadius: "50px" }}>
                Our Deals
              </Button>
            </Box>
          )}

         {/* Search Box */}
         {showSearch && (
            <Box
              sx={{
                position: "relative",
                width: { xs: "60%", sm: "25%" },
                display: "flex",
                justifyContent:"flex-end",
                alignItems: "center",
              }}
            >
              <InputBase
                placeholder="Search Products …"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  backgroundColor: "#e0e0e0",
                  borderRadius: 50,
                  padding: "4px 16px",
                  width: "100%",
                  pr: 5,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  right: 4,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  background: "linear-gradient(45deg, #D32F2F 30%, #C00000 90%)",
                  borderRadius: 50,
                  padding: "4px",
                }}
                onClick={handleSearch}
              >
                {loading ? <CircularProgress size={24} /> : <SearchIcon />}
              </IconButton>
              {/* <IconButton
                sx={{
                  position: "absolute",
                  right: 4,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  // background: "linear-gradient(45deg, #D32F2F 30%, #C00000 90%)",
                  borderRadius: 50,
                  padding: "4px",
                }}
                onClick={() => {
                  setShowSearch(false);
                  setSearchTerm(""); // Clear search input when closing
                }}
              >
                ❌
              </IconButton> */}

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && searchTerm && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    marginTop: 1,
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    zIndex: 10,
                    maxHeight: 240,
                    overflowY: "auto",
                  }}
                >
                  {searchResults.map((product) => (
                    <Link
                      href={`/products/${product._id}`}
                      key={product._id}
                      legacyBehavior
                    >
                      <a
                        style={{
                          display: "flex",
                          padding: "8px",
                          color: "#4a4a4a",
                          textDecoration: "none",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={`${product.images[0]}`}
                          alt={product.name}
                          sx={{
                            width: 28,
                            height: 28,
                            objectFit: "cover",
                            borderRadius: 1,
                            marginRight: 1,
                          }}
                        />
                        {product.name}
                      </a>
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          )}

          {/* Desktop Icons */}
          {!isMobile &&(
            <Box sx={{ display: "flex", alignItems: "center", gap: "25px", marginRight: "25px" }}>
              {!showSearch && (
                <IconButton onClick={() => setShowSearch(true)}>
                  <SearchIcon />
                </IconButton>
              )}
              <IconButton >
              <Link href="/cart" style={{ position: "relative" }}>
                <ShoppingCartOutlinedIcon />
                {isMounted && totalQuantity > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: "100%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 20,
                      fontSize: 12,
                      fontWeight: "bold",
                      backgroundColor: "#d32f2f",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "-35px",
                    }}
                  >
                    {totalQuantity}
                  </Box>
                )}
                </Link>
              </IconButton>
              <Link href="/login" passHref>
                <IconButton>
                  <AccountCircleIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Link>
            </Box>
          )}

        {/* Mobile Icon */}
        { isMobile &&(
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px"}}>
            {!showSearch && (
              <IconButton onClick={() => setShowSearch(true)}>
                <SearchIcon />
              </IconButton>
            )}
            <IconButton>
              <ShoppingCartOutlinedIcon />
              {isMounted && totalQuantity > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "80%",
                    transform: "translateX(-50%)",
                    width: 20,
                    height: 20,
                    fontSize: 12,
                    fontWeight: "bold",
                    backgroundColor: "#d32f2f",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "-40px",
                  }}
                >
                  {totalQuantity}
                </Box>
              )}
            </IconButton>
            <Link href="/login" passHref>
              <IconButton>
                <AccountCircleIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Link>
          </Box>
        )}
        {/* Mobile Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250, padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <Link href="/custom-pc">Custom PC</Link>
            <Link href="/products">Products</Link>
            <Link href="/service">Service</Link>
            <Link href="/contact-us">Contact us</Link>
            <Button variant="outlined" sx={{ borderColor: "#0057ff", color: "#0057ff" }}>Our Deals</Button>
          </Box>
        </Drawer>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;






