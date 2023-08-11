import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// BOOTSTRAP IMPORTS
import Carousel from "react-bootstrap/Carousel";

// MATERIAL UI IMPORTS
import Button from "@mui/material/Button";
import StoreItems from "./StoreItems";
import Topnav from "../Topnav/Topnav";
import Sidenav from "../Sidenav/Sidenav";
import Footer from "../Footer/Footer";
import "./Home.scss";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/Signup");
  };

  return (
    <>
      <div className="home-whole-cont">

        <Sidenav />
        <div className="home-cont">
          <Topnav />
          <div className="caro-cont">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    Welcome to JIME
                    {/* <br /> Boutique */}
                  </h3>
                  <p>
                    A boutique store where anything you want is available....{" "}
                  </p>
                  <Button
                    onClick={(e) => gotoSignup()}
                    variant="contained"
                    className="text-white bannerButton"
                    style={{ backgroundColor: '#182030' }}
                  >
                    Get Started
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h4>Experience Remagined! </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <StoreItems />
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Home;
