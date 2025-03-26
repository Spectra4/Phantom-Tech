"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCart } from "@/store/slices/cartSlice";
import { TextField, Button, CircularProgress, Box, Typography } from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";
import GoogleApiAutocomplete from "@/components/GoogleApiAutocomplete";
import Footer from "@/components/footer";
import UspsSection from "@/components/whychooseus";
import BoltIcon from "@mui/icons-material/Bolt";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isHydrated, setIsHydrated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [apartment_address, setApartment_address] = useState("");
  const [addressComponents, setAddressComponents] = useState({});
  const [shippingAddress, setShippingAddress] = useState({
    street_address1: "",
    apartment_address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    lat: "",
    lng: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Example: Matches 10-digit numbers
    return phoneRegex.test(phone);
  };


  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery"); // Default payment method

  const handleAddressSelect = (selectedAddressComponents) => {
    setAddressComponents(selectedAddressComponents);

    // Update the shippingAddress state with the selected address components
    setShippingAddress({
      street_address1: selectedAddressComponents.street_address1 || "",
      city: selectedAddressComponents.city || "",
      state: selectedAddressComponents.state || "",
      pincode: selectedAddressComponents.pincode || "",
      country: selectedAddressComponents.country || "",
      lat: selectedAddressComponents.latitude || "",
      lng: selectedAddressComponents.longitude || "",
      apartment_address, 
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setApartment_address(value);
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleApartmentAddressChange = (e) => {
    const { value } = e.target;
    setApartment_address(value); 
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      apartment_address: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();    

    // Reset errors
    const newErrors = { email: '', phone: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePhone(phone)) {
      newErrors.phone = 'Phone number must be a 10-digit number.';
    }

    setErrors(newErrors);

    const customerData = {
      fullName,
      email,
      phone,
      shippingAddress,
    };

    setLoading(true);
    try {
      // Step 1: Create Customer
      let customerResponse;
      try {
        customerResponse = await axios.post(
          `
          ${process.env.NEXT_PUBLIC_API_BASE_URL}/customers`,
          customerData
        );
      } catch (error) {
        console.error("Error creating customer:", error);
        await Swal.fire({
          title: "Error",
          text: "Failed to create customer. Please try again.",
          icon: "error",
        });
        return;
      }

      const customerId = customerResponse.data.customer._id;
      // console.log("customerResponse.data.customer", customerResponse.data);
      
      // Step 2: Create Order
      const orderData = {
        customer: customerId,
        products: cartItems.map((item) => ({
          product: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalQuantity,
        totalAmount: totalAmount,
        paymentMethod,
        note: note,
      };

      let orderResponse;
      try {
        orderResponse = await axios.post(
          `
          ${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
          orderData
        );
      } catch (error) {
        console.error("Error creating order:", error);
        await Swal.fire({
          title: "Error",
          text: "Failed to place order. Please try again.",
          icon: "error",
        });
        return;
      }

      console.log("orderResponse", orderResponse.data);

      // // Step 3: Call Porter API to create order
      // const porterOrderData = {
      //   request_id: orderResponse.data._id,
      //   email_id: customerResponse.data.customer.email,
      //   drop_details: {
      //     address: {
      //       apartment_address: apartment_address,
      //       street_address1: addressComponents.street_address1,
      //       city: addressComponents.city,
      //       state: addressComponents.state,
      //       pincode: addressComponents.pincode,
      //       country: addressComponents.country,
      //       lat: addressComponents.latitude,
      //       lng: addressComponents.longitude,
      //       contact_details: {
      //         name: customerResponse.data.customer.fullName,
      //         phone_number: `+91${customerResponse.data.customer.phone}`,
      //       },
      //     },
      //   },
      // };

      // let porterResponse;
      // try {
      //   porterResponse = await axios.post(
      //     `
      //     ${process.env.NEXT_PUBLIC_API_BASE_URL}/porter/create`,
      //     porterOrderData
      //   );
      // } catch (error) {
      //   console.error("Error creating Porter order:", error);
      //   await Swal.fire({
      //     title: "Error",
      //     text: "Failed to schedule delivery. Please try again.",
      //     icon: "error",
      //   });
      //   return;
      // }

      // console.log("porterResponse", porterResponse);

      // SweetAlert confirmation on success
      await Swal.fire({
        title: "Order Placed!",
        text: "Your order has been placed successfully!",
        icon: "success",
      });

      // Clear cart and redirect to thank you page
      dispatch(clearCart());
      router.push(`/orderInvoice/${orderResponse.data._id}`);
    } catch (error) {
      console.error("Unexpected error:", error);
      await Swal.fire({
        title: "Error",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Shipping Information */}
          <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Shipping Information
            </h2>
            {loading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
                <span className="ml-2">Placing order...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}                  
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
                <TextField
                  label="Phone"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}                  
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                />

                {/* Shipping Address Fields */}
                <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>

                <GoogleApiAutocomplete onAddressSelect={handleAddressSelect} />

                <TextField
                  label="Flat No / House No / Apartment"
                  name="apartment_address"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={apartment_address}
                  onChange={handleApartmentAddressChange}
                  required
                />

                <Box className="flex space-x-4" sx={{ mb: 2 }}>
                  <TextField
                    label="City"
                    name="city"
                    variant="outlined"
                    fullWidth
                    value={shippingAddress.city}
                    onChange={handleAddressChange}
                    required
                  />
                  <TextField
                    label="Pin Code"
                    name="pincode"
                    variant="outlined"
                    fullWidth
                    value={shippingAddress.pincode}
                    onChange={handleAddressChange}
                    required
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <TextField
                    label="Instructions For The Order"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={2}
                    name="note"
                    placeholder="Add a note (optional)"
                    onChange={(e) => setNote(e.target.value)}
                  />
                </Box>

                <fieldset sx={{ mb: 2 }}>
                  <legend className="block text-gray-700 mb-2">
                    Payment Method
                  </legend>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={paymentMethod === "cashOnDelivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="cashOnDelivery" className="ml-2 flex">
                      <img
                        src="/rupee.png" 
                        alt="Cash on Delivery Icon"
                        className="mr-2" 
                        style={{ width: "20px", height: "20px" }} 
                      />
                      Cash on Delivery
                    </label>
                  </div>
                  {/* <div className="flex items-center" sx={{ mb: 1 }}>
                  <input
                    type="radio"
                    id="onlinePayment"
                    name="paymentMethod"
                    value="onlinePayment"
                    checked={paymentMethod === "onlinePayment"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="onlinePayment" className="ml-2">
                    Online Payment
                  </label>
                </div> */}
                </fieldset>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': {
                      backgroundColor: 'darkgreen',
                    },
                  }}
                  className={loading ? "opacity-50 cursor-not-allowed" : ""}
                  disabled={loading}
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" style={{position:"sticky",top:"20px"}}>
  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

  {/* Cart Items */}
  {cartItems.length > 0 ? (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row justify-between items-center mb-4"
        >
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={`${item.image}`}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.weight}</p>
              <p className="text-gray-600">
                {item.quantity} x ₹{item.price.toFixed(2)}
              </p>
            </div>
          </div>
          <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}

      {/* Button to Modify Cart */}
      <Box className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4">
        <Link href="/cart" passHref>
          <Button variant="outlined" color="secondary" className="w-full sm:w-auto mt-4 sm:mt-0">
            Modify Cart
          </Button>
        </Link>
        {/* <Typography
          variant="body2"
          sx={{ color: "green", fontWeight: "bold", mb: "4px", mt: { sm: 0, xs: 2 } }}
        >
          <BoltIcon sx={{ color: "yellow" }} />
          Get Delivered in 2 Hours
        </Typography> */}
      </Box>

      {/* Total Price */}
      <div className="border-t mt-4 pt-4">
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <p>Total Items: {totalQuantity}</p>
          <p>Subtotal: ₹{totalAmount.toFixed(2)}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <p>Delivery Charges:</p>
          <p>₹ 0.00</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between font-bold">
          <p>Total Amount:</p>
          <p>₹{totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </>
  ) : (
    <p>No items in the cart.</p>
  )}
          </div>

        </div>
      </div>
      <UspsSection />
      <Footer />
    </>
  );
};

export default Checkout;
