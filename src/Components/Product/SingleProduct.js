import React, { useEffect } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import "./SingleProduct.scss";
import Button from "@mui/material/Button";
import Footer from "../Footer/Footer";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div className="top-product-cont">
          <div className="product-img">
            <img src="https://images.unsplash.com/photo-1639789975707-965add2cf0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGdsYXNzZXMlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>

          <div className="product-details">
            <h3>Gucci Glasses</h3>

            <p className="product-description">
              {" "}
              <b>Description:</b> <br /> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consequatur dolorum velit expedita deserunt
              nobis. Laudantium dolorem tenetur quae saepe error!
            </p>

            <h6 className="product-price">N25,540</h6>

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
              <Button variant="contained" style={{ backgroundColor: '#182030' }}>Buy Now</Button>
              <Button vriant="outlined" style={{ color: '#182030' }}>Add to cart</Button>
            </div>
          </div>
        </div>

        {/* <hr style={{ color: "black",  width: "100%", marginTop: "60px"}}/> */}


        <Footer />
      </div>


    </div>
  );
};

export default SingleProduct;

