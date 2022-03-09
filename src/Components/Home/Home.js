import React, { useState } from "react";
import "./Home.scss";
import { useParams, useNavigate } from "react-router-dom";

// BOOTSTRAP IMPORTS
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StoreItems from "./StoreItems";
import Topnav from "../Topnav/Topnav";
import Sidenav from "../Sidenav/Sidenav";
import Footer from "../Footer/Footer";

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

        <Sidenav/>
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
                  Welcome to STylish <br /> Boutique
                </h3>
                <p>
                  A boutique store where anything you want is available....{" "}
                </p>
                <Button
                  onClick={(e) => gotoSignup()}
                  variant="contained"
                  sx={{ marginTop: "30px" }}
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
                <h4>Never </h4>
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
        <Footer/>
      </div>
      </div>

    </>
  );
};

export default Home;
