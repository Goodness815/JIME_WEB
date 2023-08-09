import React from "react";
import "../Home/Home.scss";
import "./Stores.scss";

// MATERIAL UI IMPORTS
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import Glasses from "./Glasses";

const Stores = () => {
  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div
          className="whole-categories-cont"
        >
          <Glasses id="glasses" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Stores;
