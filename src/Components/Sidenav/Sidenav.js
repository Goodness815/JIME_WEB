import React, { useState, useEffect } from "react";
import "./Sidenav.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";



// MATERIAL UI IMPORTS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import MenuIcon from "@mui/icons-material/Menu";

// BOOTSTRAP
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

const Sidenav = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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

  const gotoStoreGlasses = () => {
    navigate("/store/#glasses");
  };


  return (
    // <div>
    <div className="sidenav-cont">
      <div className="burger-cont">
      <MenuIcon onClick={handleShow} />
      </div>

      <div className="off-small-icon">
        <Button variant="primary" onClick={handleShow}>
          <HomeOutlinedIcon />
        </Button>

        <Button variant="primary" onClick={handleShow}>
          <ShoppingCartOutlinedIcon />
        </Button>

        <Button variant="primary" onClick={handleShow}>
          <StoreMallDirectoryOutlinedIcon />
        </Button>

        <Button variant="primary" onClick={handleShow}>
          <CategoryOutlinedIcon />
        </Button>
      </div>

      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
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
              //   subheader={
              //     <ListSubheader component="div" id="nested-list-subheader">
              //       Nested List Items
              //     </ListSubheader>
              //   }
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
                <ListItemText primary="Store" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <CategoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                  <ListItemButton sx={{ pl: 4 }} onClick={(e) => gotoStore()} >
                    <ListItemIcon>
                      <CheckroomOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clothes" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} onClick={(e) => gotoStoreGlasses()} >
                    <ListItemIcon>
                      <StoreMallDirectoryOutlinedIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Glasses" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StoreMallDirectoryOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bags" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StoreMallDirectoryOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shoes" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Offcanvas.Body>
        </Offcanvas>
      </>

      <div className="logo-cont2">ST</div>
    </div>

    // </div>
  );
};

export default Sidenav;
