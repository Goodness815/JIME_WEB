import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import './Footer.scss';
import Button from "@mui/material/Button";


const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="footer-cont">
        <div className="footer-part1">
          <div className="logo">ST</div>
          <p>Never get out of style and be the best you can</p>
          <Button variant="contained">Get Started</Button>
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part2">
          <Link to="#">About</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Docs</Link>
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part3">
          <Link to="#">Terms and Condition</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie Policy</Link>
        </div>
            <div className="hr-footer" > </div>
        <div className="footer-part4">
          <h6>Let's Chat!</h6>
          <a href="mailto:stboutique@gmail.com">stboutique@gmail.com</a>
          <div className="social-cont">
            <StoreMallDirectoryOutlinedIcon />
            <StoreMallDirectoryOutlinedIcon />
            <StoreMallDirectoryOutlinedIcon />
            <StoreMallDirectoryOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
