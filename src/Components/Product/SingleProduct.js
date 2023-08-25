import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import "./SingleProduct.scss";
import Button from "@mui/material/Button";
import Footer from "../Footer/Footer";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { PaystackButton } from "../utils/PayStack";

const SingleProduct = () => {
  const initData = useLocation().state
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [currentData, setCurrentData] = useState(initData || {})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentData(currentData)
  }, [])

  const handleAddCart = async (allProduct) => {
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/products/cart`, { id: userData.id, product: allProduct })

      setLoading(false)
      if (res.data.success) {
        toast.success('Product added to cart!')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }

  }

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    if (reference.status === 'success') {
      return console.log(reference)
    } else {
      return console.log(reference)
    }
  };


  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    toast.error('Payment Cancelled')
  }


  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime().toString(),
    email: userData.email,
    amount: currentData?.productPrice * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  });



  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div className="top-product-cont">
          <div className="product-img">
            <img src={currentData?.productImage} style={{ objectFit: "contain", padding: "30px" }} alt="product logo" />
          </div>

          <div className="product-details">
            <h3>{currentData?.productName}</h3>

            <p className="product-description">
              {" "}
              <b>Description:</b> <br /> {currentData?.productDesc}
            </p>

            <h6 className="product-price">N{formatNumberWithCommas(currentData?.productPrice)}</h6>

            <div className="rating">
              {" "}
              <div className="icon-rating"> <StarPurple500OutlinedIcon />
                <StarPurple500OutlinedIcon />
                <StarPurple500OutlinedIcon />
                <StarPurple500OutlinedIcon />
                <StarHalfOutlinedIcon />
              </div>
              {/* <p>441 ratings</p> */}

            </div>



            <div className="btn-cont">
              <PaystackButton amount={currentData?.productPrice} email={userData.email} buttonBase={true} />
              <Button vriant="outlined" style={{ color: '#182030' }} onClick={userData ? () => handleAddCart(currentData) : () => navigate('/login')}>{loading ? "Adding.." : "Add to cart"}</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>


    </div>
  );
};

export default SingleProduct;

