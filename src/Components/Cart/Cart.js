import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";

import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { TbCurrencyNaira } from 'react-icons/tb'
import { Spinner } from 'react-bootstrap'
// import { message } from 'antd'
import axios from 'axios'
import { toast } from "react-hot-toast";
import { PaystackButton } from "../utils/PayStack";
import "./Cart.scss";

const Cart = () => {

  const userData = JSON.parse(localStorage.getItem('userData'))
  const navigate = useNavigate()
  const [deleteProduct, setDeleteProduct] = useState('')
  const [loader, setLoader] = useState(false)
  const [cartProduct, setCartProduct] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to calculate the total product price from an array of products
  const calculateTotalPrice = (productArray) => {
    let totalPrice = 0;
    for (const product of productArray) {
      totalPrice += product.productPrice;
    }
    return totalPrice;
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  //Function to fetch cart data
  const fetchCart = async () => {
    setLoader(true)
    try {
      const res = await axios.get(`${process.env.REACT_APP_DEV_URL}/products/cart/${userData.id}`)
      setLoader(false)
      if (res.data.success) {
        setCartProduct(res.data.data)
      } else {
        toast.error(res.data.message)
        setCartProduct([])
      }

    } catch (error) {
      toast.error(error.message)
      setLoader(false)
    }
  }

  // Function to delete cart product
  const handleCartProductDelete = async (id) => {
    setDeleteProduct(id)
    try {
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/products/cart/delete`, { id: userData.id, productId: id })
      setDeleteProduct('')
      if (res.data.success) {
        toast.success('Deleted sucessfully!')
        fetchCart()
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setDeleteProduct('')
      toast.error(error.message)
    }
  }


  // UseEffect to fetch cart when page loads
  useEffect(() => {
    if (userData) {
      fetchCart()
    }
  }, [])

  if (!userData) {
    return <Navigate to='/login' />
  }

  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />
        <div className="cartdetailsmain">
          <div className="back-case d-flex align-items-center justify-content-start">
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>   <BsFillArrowLeftCircleFill /></div>
          </div>
          <div className="cartdetailscase d-flex align-items-start justify-content-between">
            <div className="cartdetailsleft d-flex flex-column  justify-content-start shadow">
              <div className="cart-header d-flex align-items-center justify-content-between">
                <h6>Cart {`(${cartProduct ? cartProduct.length : 0})`}</h6>
                <div>
                  <Link to="/orders">View Orders</Link>
                  {loader && <Spinner animation="border" role="status" size='sm' className='store-spinner'>
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>}
                </div>
              </div>

              {cartProduct?.map((cartBox) => {
                return <div key={cartBox.id} className="cart-box-item d-flex  justify-content-between">
                  <div className="cart-box-item-left d-flex flex-column align-items-start justify-content-between">
                    <div className="cart-box-left-top d-flex align-items-center justify-content-start">
                      <div className="cartdetailsleftimg d-flex align-items-center justify-content-center">
                        <img src={cartBox.productImage} alt="" />
                      </div>
                      <div className="cartdetailslefttext">
                        <h1>{cartBox.productName}</h1>
                        <span className="cartdetailsprice">Quantity: 1</span>
                      </div>
                    </div>
                    <div className="cart-box-left-botom d-flex align-items-center" onClick={() => handleCartProductDelete(cartBox.id)}>
                      {deleteProduct === cartBox.id ? (
                        <>
                          <span className=" d-flex align-items-center justify-content-center">
                            <Spinner animation="border" role="status" size='sm' className='store-spinner'>
                              <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            <span style={{ marginLeft: '10px' }}>REMOVING</span>
                          </span>
                        </>
                      ) : (
                        <>
                          <AiOutlineDelete className='cartdeleteicon' /><span>REMOVE</span>
                        </>
                      )}

                    </div>
                  </div>

                  <div className="cart-box-item-right d-flex flex-column align-items-end justify-content-between">
                    <div className="cart-box-right-top d-flex align-items-center">
                      <TbCurrencyNaira /> {formatNumberWithCommas(cartBox.productPrice)}
                    </div>
                    {/* <div className="cart-box-right-box d-flex align-items-center">
                      <button onClick={() => handleDecreaseQuantity(cartBox.productToken, cartBox.productQuantity, cartBox.maximumQuantity)}><AiOutlineMinus /></button>
                      <span>

                        {incrementProduct === cartBox.productToken ? (
                          <>
                            <span className=" d-flex align-items-center justify-content-center">
                              <Spinner animation="border" role="status" size='sm' className='store-spinner'>
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            </span>
                          </>
                        ) : (
                          <>{cartBox.productQuantity}</>
                        )}

                      </span>
                      <button onClick={() => handleIncreaseQuantity(cartBox.productToken, cartBox.productQuantity, cartBox.maximumQuantity
                      )}><BsPlusLg /></button>
                    </div> */}
                  </div>
                </div>
              })}

            </div>



            <div className="cartdetailsright shadow">
              <span className='cartdetailsrightspan'>CART SUMMARY</span>
              <div className="cartdetailsamount">
                <span>AMOUNT:</span> {formatNumberWithCommas(calculateTotalPrice(cartProduct))}
              </div>
              <div className="cartdetailsbuttondiv">
                <PaystackButton amount={calculateTotalPrice(cartProduct)} email={userData.email} />
                {/* <button onClick={() => initializePayment(onSuccess, onClose)}>PAY NOW</button> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>


    </div>

  );
};

export default Cart;
