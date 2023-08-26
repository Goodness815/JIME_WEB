import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Navigate, useNavigate } from 'react-router-dom'
import { TbCurrencyNaira } from 'react-icons/tb'
// import { message } from 'antd'
import axios from 'axios'
import { toast } from "react-hot-toast";
import "./orders.css";

const Orders = () => {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [cartProduct, setCartProduct] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    //Function to fetch cart data
    const fetchOrders = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_DEV_URL}/products/orders/${userData.id}`)
            if (res.data.success) {
                setCartProduct(res.data.data)
            } else {
                toast.error(res.data.message)
                setCartProduct([])
            }

        } catch (error) {
            toast.error(error.message)
        }
    }



    // UseEffect to fetch cart when page loads
    useEffect(() => {
        if (userData) {
            fetchOrders()
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
                                <h6>All Orders {`(${cartProduct ? cartProduct.length : 0})`}</h6>
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

                                    </div>

                                    <div className="cart-box-item-right d-flex flex-column align-items-end justify-content-between">
                                        <div className="cart-box-right-top d-flex align-items-center">
                                            <TbCurrencyNaira /> {formatNumberWithCommas(cartBox.productPrice)}
                                        </div>

                                    </div>
                                </div>
                            })}

                        </div>

                    </div>
                </div>
                <Footer />
            </div>


        </div>

    );
};

export default Orders;
