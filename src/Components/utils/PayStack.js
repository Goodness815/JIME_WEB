import React, { useState } from 'react';
import axios from 'axios'
import { Button, Spinner } from 'react-bootstrap'
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-hot-toast';

export const PaystackButton = ({ amount, email, buttonBase }) => {
    const [loader, setLoader] = useState(false)



    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        if (reference.status === 'success') {
            return orderProduct(reference)
        } else {
            return orderProduct(reference)
        }
    };


    const orderProduct = async (payload) => {
        setLoader(true)
        try {
            const res = await axios.post(`${URL}/p/buyFromWallet`)
            setLoader(false)
            if (res.data.success) {
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            setLoader(false)
            toast.error(error.message)
        }

    }

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        toast.error('Payment Cancelled')
    }


    const initializePayment = usePaystackPayment({
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: 'pk_test_ccd9d31670a4e4be4917412334639e338067d4be',
    });



    return (
        <>
            {buttonBase ? <Button variant='contained' style={{ backgroundColor: '#182030', color: "white" }} onClick={() => initializePayment(onSuccess, onClose)}>
                {loader ? <Spinner animation="border" role="status" size='sm' className='store-spinner payment-loader'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner> : 'BUY NOW'
                }
            </Button>
                :
                <button className="orderbtn2" onClick={() => initializePayment(onSuccess, onClose)}>
                    {loader ? <Spinner animation="border" role="status" size='sm' className='store-spinner payment-loader'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> : 'PAY NOW'
                    }
                </button>
            }
        </>
    );
};

