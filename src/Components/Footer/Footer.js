import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import './Footer.scss';


const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="footer-cont">
        <div className="footer-part1">
          {/* <div className="logo"> */}
          <img src={logo} alt="Logo" width={'170px'} />
          {/* </div> */}
          <p>Never get out of style and be the best you can</p>
          {/* <Button variant="contained">Get Started</Button> */}
        </div>

        <div className="hr-footer" > </div>


        {/* <div className="footer-part2">
          <Link to="#">About</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Docs</Link>
        </div> */}

        <div className="hr-footer" > </div>


        <div className="footer-part3">
          <Link to="#">Terms and Condition</Link>
          <Link to="#">Privacy Policy</Link>
          {/* <Link to="#">Cookie Policy</Link> */}
        </div>
        <div className="hr-footer" > </div>
        <div className="footer-part4">
          <h6>Let's Chat!</h6>
          <a href="mailto:help@jime.com">help@jime.com</a>
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
