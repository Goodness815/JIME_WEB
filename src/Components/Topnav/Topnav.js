import React, { useState } from "react";
import logo from '../../assets/logo.png'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link, useNavigate } from "react-router-dom";
import "./Topnav.scss";



const Topnav = () => {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem('searchQuery')) || '')

  function getFirstLetter(str) {
    return str.charAt(0);
  }

  const handleSearch = (e) => {
    e.preventDefault()
    localStorage.setItem('searchQuery', JSON.stringify(search))
    navigate(`/search/${search}`, { state: search })
  }

  return (
    <div className="topnav-cont align-items-center shadow">

      <div className="topnav-cont-top d-flex align-items-center justify-content-between w-100">
        <Link to='/'>
          <img src={logo} alt="" className="logo" style={{ marginLeft: '30px' }} />
        </Link>

        <form onSubmit={handleSearch} className="search-cont">
          <div className="search-icon">
            <SearchIcon type='submit' className="icon" onClick={handleSearch} />
          </div>
          <input type="text" value={search} placeholder="what are you looking for......" required onChange={(e) => setSearch(e.target.value)} />
        </form>

        <div className="account-bar">

          {!userData ?
            <>
              <Link to="/login" className="log-btn-top">Login</Link>
              <Link to="/signup" className="sign-btn-top">Signup</Link>
            </>

            :
            <>
              <h6>{userData.lname}</h6>
              <div className="accountProfileDiv">
                {getFirstLetter(userData?.fname)}{getFirstLetter(userData?.lname)}
              </div>
              {/* <AccountCircleOutlinedIcon fontSize="large" sx={{ marginRight: '10px' }} /> */}
              <Link to='/cart'>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Link>
            </>

          }
        </div>
      </div>
      <div className="topnav-cont-bottom d-flex align-items-center justify-content-center w-100">
        <form onSubmit={handleSearch} className="search-cont">
          <div className="search-icon">
            <SearchIcon type='submit' className="icon" />
          </div>
          <input type="text" value={search} placeholder="what are you looking for......" required onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>



    </div >
  );
};

export default Topnav;
