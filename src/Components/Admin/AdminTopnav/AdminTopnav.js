import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./AdminTopnav.scss"


// BOOTSTRAP
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { toast } from "react-hot-toast";
import axios from "axios";



const AdminTopnav = ({ status, setStatus }) => {
  const adminData = JSON.parse(localStorage.getItem('adminData'))
  const [show, setShow] = useState(false);



  const handleClose = (e) => {
    setShow(false);
  };

  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };

  const [productData, setProductData] = useState({
    productName: '',
    productDesc: '',
    productPrice: '',
    productImage: '',
  });

  const [loading, setLoading] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function that converts image to blob 
  const handleBlob = (img, resultState) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      // Base64 Data URL 
      resultState((prv) => ({
        ...prv,
        productImage: reader.result
      }))

    });
    reader.readAsDataURL(img);
  }

  // process.env.REACT_APP_DEV_URL
  const createProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/products`, productData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: `Bearer ${adminData?.token || ''}`
        },
      })
      setLoading(false)
      if (res.data.success) {
        setStatus(status + 1)
        setProductData({
          productName: '',
          productDesc: '',
          productPrice: '',
          productImage: '',
        })
        handleClose()
        toast.success('Product created Successfully')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }


  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="logo-cont-a">ST</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link onClick={handleShow} href="#action2">Add Products</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outlined">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* ADD NEW PRODUCTS FOR ADMIN */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={createProduct} className="add-products">
            <b>Product Name</b>
            <br />
            <input type="text" name='productName' onChange={handleInputChange} required />
            <br />
            <b>Product Description</b>
            <br />
            <input type="text" name='productDesc' onChange={handleInputChange} required />
            <br />
            <b>Product Price</b>
            <br />
            <input type="text" name='productPrice' onChange={handleInputChange} required />
            <br />
            <b>Product Image</b>
            <br />
            <input type="file" onChange={(e) => handleBlob(e.target.files[0], setProductData)} required />
            <button type="submit" style={{ backgroundColor: 'black', color: 'white' }} >
              {loading ? 'Saving...' : "Save"}
            </button>
          </form>

        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminTopnav;
