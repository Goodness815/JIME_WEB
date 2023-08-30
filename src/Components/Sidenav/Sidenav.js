import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



// MATERIAL UI IMPORTS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CloseIcon from '@mui/icons-material/Close';


// BOOTSTRAP
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidenav.scss";

const Sidenav = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  // BOOTSTRAP OFF CANVAS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // ROUTING TO EACH OF THEIR PAGES

  let navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const gotoCart = () => {
    navigate("/cart");
  };


  const gotoOrders = () => {
    navigate("/orders");
  };

  const handleLogout = () => {
    localStorage.removeItem('userData')
    navigate('/login')
  }

  function getFirstLetter(str) {
    return str.charAt(0);
  }

  return (
    // <div>
    <div className="sidenav-cont">
      <div className="burger-cont">
        <MenuIcon onClick={handleShow} />
      </div>

      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className="text-white" >
            <Offcanvas.Title className='w-100 mb-4 d-flex align-items-center justify-content-between'>
              <div className="logo-cont h-100">{getFirstLetter(userData?.fname ? userData?.fname : 'JI')}{getFirstLetter(userData?.lname ? userData?.lname : "EI")}</div>
              <div className="closeicon" onClick={handleClose} sx={{ cursor: 'pointer' }}><CloseIcon /></div>
            </Offcanvas.Title>
          </Offcanvas.Header >
          <Offcanvas.Body>
            <List
              style={{ color: "white" }}
              sx={{ width: "100%", maxWidth: 360, marginTop: "20px" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton style={{ color: "white" }} onClick={(e) => gotoHome()}>
                <ListItemIcon style={{ color: "white" }}  >
                  <HomeOutlinedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Home" />
              </ListItemButton>

              <ListItemButton style={{ color: "white" }} onClick={(e) => gotoCart()}>
                <ListItemIcon style={{ color: "white" }}  >
                  <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                </ListItemIcon >
                <ListItemText style={{ color: "white" }} primary="Cart" />
              </ListItemButton>

              <ListItemButton style={{ color: "white" }} onClick={(e) => gotoOrders()} >
                <ListItemIcon style={{ color: "white" }}>
                  <StoreMallDirectoryOutlinedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Orders" />
              </ListItemButton>
              {userData && <ListItemButton style={{ color: "white" }} onClick={(e) => handleLogout()} >
                <ListItemIcon style={{ color: "white" }}>
                  <ExitToAppOutlinedIcon style={{ color: "white" }} className="icon" />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Logout" />
              </ListItemButton>}
            </List>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>

  );
};

export default Sidenav;
