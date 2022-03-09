import React from "react";
import "./Topnav.scss";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const Topnav = () => {
  return (
    <div className="topnav-cont">
      <div className="search-cont">
        <input type="text" placeholder="What are you looking for......"/>
        <div className="search-icon">
        <SearchIcon />
        </div>
      </div>

      <div className="account-bar">

        {/* <h6>Adenuga</h6>
        <AccountCircleOutlinedIcon/> */}

        {/* IF USER IS NOT LOGGED IN SO CONDITIONAL STATEMENT COMES IN HERE */}

        <Link to="/login" className="log-btn-top">Login</Link>
        <Link to="/signup" className="sign-btn-top">Signup</Link>
      </div>
    </div>
  );
};

export default Topnav;
