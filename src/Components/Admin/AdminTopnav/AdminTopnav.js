import React, {  useState } from "react";
import "./AdminTopnav.scss"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";


// BOOTSTRAP
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";



const AdminTopnav = () => {

  const [show, setShow] = useState(false);


  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };


  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };


  return (
    <div>
      <Navbar  expand="lg" bg="dark" variant="dark">
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
              <Nav.Link href="#action2">Products</Nav.Link>
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
            {/* <h1>Rocket jacket product</h1>
            <p> <b>Description: </b> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>

            <hr />

            <h4>Add-ons</h4>
            <form action="">
              <label htmlFor=""> Color</label>
              <br />
              <input type="color" />  

              <br />
              <label htmlFor="">Size</label>
              <br />
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>  
              </select>
            </form> */}

            <form action="" className="add-products">
              <b>Product Name</b>
              <br/>
              <input type="text" />
              <br/>
              <b>Product Description</b>          
              <br/>
              <input type="text" />
              <br/>
              <b>Product Price</b>
              <br/>
              <input type="text" />
              <br/>
              <h5>Add-ons</h5>
              <b>Product Size</b>
              <br/>
              <input type="text" />
              <br/>
              <b>Product Color</b>
              <br/>
              <input type="text" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Save
            </Button>
            {/* <Button variant="primary" onClick={handleShow}>
              E
            </Button> */}
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default AdminTopnav;
