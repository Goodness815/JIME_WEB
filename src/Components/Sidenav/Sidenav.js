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

// BOOTSTRAP
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidenav.scss";

const Sidenav = () => {

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


  const gotoStore = () => {
    navigate("/store");
  };


  return (
    // <div>
    <div className="sidenav-cont">
      <div className="burger-cont">
        <MenuIcon onClick={handleShow} />
      </div>

      {/* <div className="off-small-icon">
        <Button variant="primary" onClick={handleShow}>
          <HomeOutlinedIcon />
        </Button>

        <Button variant="primary" onClick={handleShow}>
          <ShoppingCartOutlinedIcon />
        </Button>

        <Button variant="primary" onClick={handleShow}>
          <StoreMallDirectoryOutlinedIcon />
        </Button>

      </div> */}

      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="text-white">
            <Offcanvas.Title>
              {" "}
              <div className="logo-cont">ST</div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <List
              sx={{ width: "100%", maxWidth: 360, marginTop: "20px" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            // subheader={
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     Nested List Items
            //   </ListSubheader>
            // }
            >
              <ListItemButton onClick={(e) => gotoHome()}>
                <ListItemIcon  >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton onClick={(e) => gotoCart()}>
                <ListItemIcon  >
                  <ShoppingCartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>

              <ListItemButton onClick={(e) => gotoStore()} >
                <ListItemIcon>
                  <StoreMallDirectoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>

            </List>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>

  );
};

export default Sidenav;
