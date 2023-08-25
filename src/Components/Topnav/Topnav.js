import React from "react";
import logo from '../../assets/logo.png'
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import "./Topnav.scss";



const Topnav = () => {

  const userData = JSON.parse(localStorage.getItem('userData'))

  return (
    <div className="topnav-cont align-items-center">

      <div className="topnav-cont-top d-flex align-items-center justify-content-between w-100">
        <img src={logo} alt="" className="logo" style={{ marginLeft: '30px' }} />

        <div className="search-cont">
          <div className="search-icon">
            <SearchIcon className="icon" />
          </div>
          <input type="text" placeholder="what are you looking for......" />
        </div>

        <div className="account-bar">

          {!userData ?
            <>
              <Link to="/login" className="log-btn-top">Login</Link>
              <Link to="/signup" className="sign-btn-top">Signup</Link>
            </>

            :

            <>

              <h6>{userData.lname}</h6>
              <AccountCircleOutlinedIcon />
            </>

          }
        </div>
      </div>
      <div className="topnav-cont-bottom d-flex align-items-center justify-content-center w-100">
        <div className="search-cont">
          <div className="search-icon">
            <SearchIcon className="icon" />
          </div>
          <input type="text" placeholder="what are you looking for......" />
        </div>
      </div>



    </div >
  );
};

export default Topnav;
