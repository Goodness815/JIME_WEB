import React, { useState, useEffect } from "react";
import "../Home/Home.scss";
import "./Stores.scss";

import { useParams, useNavigate } from "react-router-dom";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import Bags from "./Bags";
import Glasses from "./Glasses";
import Shoes from "./Shoes";
import Clothes from "./Clothes";

const Stores = () => {
  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div
          className="whole-categories-cont"
        >
            <Clothes/>
          <Bags />
          <Glasses id="glasses" />
          <Shoes/>
        
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Stores;
