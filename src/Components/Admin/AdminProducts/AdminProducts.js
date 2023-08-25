import React, { useEffect, useState } from "react";
import "./AdminProducts.scss";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdminTopnav from "../AdminTopnav/AdminTopnav";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// BOOTSTRAP 
import Modal from "react-bootstrap/Modal";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AdminProducts = () => {
  const adminData = JSON.parse(localStorage.getItem('adminData'))
  const currentProducts = JSON.parse(localStorage.getItem('productData'))
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // MODAL
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(currentProducts || []);
  const [show2, setShow2] = useState(false);

  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };

  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };

  const handleCloseEdit = (e) => {
    setShow2(false);
    setShow(true);
    // setLoading(false);
  };
  const handleShowEdit = (e) => {
    // setLoading(true);
    setShow2(true);
    setShow(false);
  };
  const getAllProducts = async () => {
    if (!currentProducts) {
      setLoading(true)
    }
    try {
      const res = await axios.get(`${process.env.REACT_APP_DEV_URL}/products`)
      setLoading(false)
      if (res.data.success) {
        localStorage.setItem('productData', JSON.stringify(res.data.data))
        setProducts(res.data.data)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  const handleProductDelete = async (productId) => {
    var userConfirmed = window.confirm("Are you sure you want to delete this product?");
    if (userConfirmed) {
      toast.promise(deleteProduct(productId), {
        loading: 'Loading',
        success: 'Product deleted successfully!',
        error: 'Error deleting product',
      })
    }
  }
  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_DEV_URL}/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: `Bearer ${adminData?.token || ''}`
        },
      })
      setLoading(false)
      getAllProducts()
      if (res.data.success) {
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }



  useEffect(() => {
    getAllProducts()
  }, [status])

  if (!adminData) {
    return <Navigate to='/admin' />
  }

  return (
    <div className="admin-w-c">
      <AdminTopnav status={status} setStatus={setStatus} />

      <hr />

      <div className="admin-p-c">

        {loading ?
          <>
            Fetching products...
          </>
          :
          <>
            {products.map((allProduct) => {
              const { productName, productPrice, productDesc, productImage, id } = allProduct;
              return (
                <div key={id} className="each-apc" style={{ minHeight: '85vh' }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="160"
                      image={productImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {productDesc}
                      </Typography>

                      <Typography gutterBottom variant="body" component="text">
                        {/* {description} */}
                      </Typography>

                      <Typography
                        sm={{ fontSize: "12px !important" }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {" "}
                        &#8358;
                        {productPrice}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={handleShow} variant="contained" size="small">
                        View
                      </Button>{" "}
                      <DeleteOutlineOutlinedIcon onClick={() => handleProductDelete(id)} />
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </>}


        {/* MODAL DETAILS PRODUCTS */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
            <p> <b>Description: </b> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShowEdit}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>


        {/* EDIT PRODUCTS */}
        <Modal show={show2} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminProducts;
