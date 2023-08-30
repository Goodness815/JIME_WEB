import React, { useState } from 'react';
import axios from 'axios'
import { Button, Modal, Spinner } from 'react-bootstrap'
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-hot-toast';
const userData = JSON.parse(localStorage.getItem('userData'))
export const PaystackButton = ({ product, amount, email, buttonBase }) => {
    const [loader, setLoader] = useState(false)
    const [show, setShow] = useState(false)
    const [updatedUserData, setUpdatedUserData] = useState(JSON.parse(localStorage.getItem('updatedUserData')) || {
        fullName: userData ? userData?.name : '',
        email: userData ? userData?.email : '',
        phoneNumber: '',
        address: ''
    })


    const saveUserAddress = (e) => {
        e.preventDefault()
        setShow(false)
        return initializePayment(onSuccess, onClose)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const orderProduct = async (payload) => {
        localStorage.setItem('updatedUserData', JSON.stringify(updatedUserData))
        setLoader(true)
        try {
            const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/products/createorder`, { paymentData: payload, product, user: { ...userData, ...updatedUserData } })
            setLoader(false)
            if (res.data.success) {
                toast.success('Order placed sucessfully! kindly check your mail for more updates.')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            setLoader(false)
            toast.error(error.message)
        }

    }

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        if (reference.status === 'success') {
            return orderProduct(reference)
        } else {
            return orderProduct(reference)
        }
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        toast.error('Payment Cancelled')
    }


    const initializePayment = usePaystackPayment({
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: process.env.REACT_APP_PAYSTACK_KEY,
    });


    return (
        <>
            {buttonBase ? <Button variant='contained' disabled={!email || !amount ? true : false} style={{ backgroundColor: '#182030', color: "white" }} onClick={!email ? () => toast.error('Kindly login to proceed!') : () => setShow(true)}>
                {loader ? <Spinner animation="border" role="status" size='sm' className='store-spinner payment-loader'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner> : 'BUY NOW'
                }
            </Button>
                :
                <button disabled={!email || !amount ? true : false} className="orderbtn2" onClick={() => setShow(true)}>
                    {loader ? <Spinner animation="border" role="status" size='sm' className='store-spinner payment-loader'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> : 'PAY NOW'
                    }
                </button>
            }

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={saveUserAddress} className="add-products">
                        <b>Full Name</b>
                        <br />
                        <input type="text" name='fullName' disabled value={updatedUserData.fullName} onChange={handleInputChange} required />
                        <br />
                        <b>Email</b>
                        <br />
                        <input type="email" name='email' disabled value={updatedUserData.email} onChange={handleInputChange} required />
                        <br />
                        <b>Phone Number</b>
                        <br />
                        <input type="number" name='phoneNumber' value={updatedUserData.phoneNumber} onChange={handleInputChange} required />
                        <br />
                        <b>Home Address</b>
                        <br />
                        <input type="text" name='address' value={updatedUserData.address} onChange={handleInputChange} required />
                        <button type="submit" style={{ backgroundColor: '#182030', color: 'white', borderRadius: '6px' }} >
                            Next
                        </button>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

