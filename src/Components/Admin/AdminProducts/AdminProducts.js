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
  const [viewData, setViewData] = useState({
    productName: '',
    productDesc: '',
    productPrice: '',
    productImage: '',
  });
  const [search, setSearch] = useState('');


  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };

  const handleViewShow = (payload) => {
    setViewData(payload)
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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setViewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  // process.env.REACT_APP_DEV_URL
  const editProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.put(`${process.env.REACT_APP_DEV_URL}/products/${viewData.id}`, viewData, {
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
        setShow2(false);
        setShow(false);
        toast.success('Product edited Successfully')
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

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };



  useEffect(() => {
    getAllProducts()
  }, [status])


  if (!adminData) {
    return <Navigate to='/admin' />
  }

  return (
    <div className="admin-w-c">
      <AdminTopnav status={status} setStatus={setStatus} search={search} setSearch={setSearch} />

      <hr />

      <div className="admin-p-c" style={{ minHeight: '85vh' }}>

        {loading ?
          <>
            Fetching products...
          </>
          :
          <>
            {products
              .filter((item) =>
                item.productName.toLowerCase().includes(search.toLowerCase()) ||
                item.productDesc.toLowerCase().includes(search.toLowerCase())
              ).map((allProduct) => {
                const { productName, productPrice, productDesc, productImage, id } = allProduct;
                return (
                  <div key={id} className="each-apc" >
                    <Card className="adminCard" sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="160"
                        image={productImage}
                        className="adminProductImage"
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
                          {formatNumberWithCommas(productPrice)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={() => handleViewShow(allProduct)} variant="contained" size="small">
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
          </Modal.Header>
          <Modal.Body>
            <h1>{viewData?.productName}</h1>
            <p> <b>Description: </b> <br />{viewData?.productDesc}</p>
            <h5>&#8358;{formatNumberWithCommas(viewData.productPrice || 0)}</h5>
            <CardMedia
              component="img"
              alt="iguana"
              height="200"
              style={{ objectFit: 'contain' }}
              image={viewData?.productImage}
            />
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
        <Modal style={{ padding: '40px' }} show={show2} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>{viewData?.productName}</Modal.Title>
          </Modal.Header>
          <form style={{ padding: '25px', color: 'black' }} onSubmit={editProduct} className="add-products">
            <b>Product Name</b>
            <br />
            <input type="text" name='productName' value={viewData.productName} onChange={handleInputChange} required />
            <br />
            <b>Product Description</b>
            <br />
            <input type="text" name='productDesc' value={viewData.productDesc} onChange={handleInputChange} required />
            <br />
            <b>Product Price</b>
            <br />
            <input type="text" name='productPrice' value={viewData.productPrice} onChange={handleInputChange} required />
            <br />
            <b>Product Image</b>
            <br />
            <input type="file" onChange={(e) => handleBlob(e.target.files[0], setViewData)} />
            <button type="submit" style={{ backgroundColor: 'black', color: 'white' }} >
              {loading ? 'Saving...' : "Save"}
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AdminProducts;
