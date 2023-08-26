import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from '../../assets/banner.jpg'
// BOOTSTRAP IMPORTS
import Carousel from "react-bootstrap/Carousel";

// MATERIAL UI IMPORTS
import Button from "@mui/material/Button";
import StoreItems from "./StoreItems";
import Topnav from "../Topnav/Topnav";
import Sidenav from "../Sidenav/Sidenav";
import Footer from "../Footer/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Home.scss";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('productData')) || []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/Signup");
  };

  const getAllProducts = async () => {
    if (!userData) {
      setLoading(true)
    }
    try {
      const res = await axios.get(`${process.env.REACT_APP_DEV_URL}/products`)
      setLoading(false)
      if (res.data.success) {
        localStorage.setItem('productData', JSON.stringify(res.data.data))
        setProducts(res.data.data)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <div className="home-whole-cont">

        <Sidenav />
        <div className="home-cont">
          <Topnav />
          <div className="caro-cont">
            <div className="caro-contInner">
              <div className="contTextInner">
                <h2>Welcome to JIME</h2>
                <p>A boutique store where anything you want is available.... </p>
                <button>Get Started</button>
              </div>
            </div>
          </div>

          <StoreItems title='Top Products' loading={loading} allProduct={products} />
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Home;
