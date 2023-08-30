import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./reset.scss";

const ForgotPassword = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [formData, setFormData] = useState({
        email: '',
    });

    const [loading, setLoading] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        // return;
        setLoading(true)
        try {
            // const res = await axios.post(`http://localhost:5000/api/v1/auth/forgot`, formData)
            const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/forgot`, formData)
            setLoading(false)
            if (res.data.success) {
                toast.success('Check your mail to proceed!')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    if (userData) {
        return <Navigate to='/' />
    }
    return (
        <div className="container-log">
            <div className="top-nav">
                {/* <div className="logo">ST</div> */}
                <Link to="/">Home</Link>
                {/* <Link to="/Signup">Join</Link> */}
            </div>

            <div className="login-cont">
                <div className="login-whole-cont">
                    <div className="top-log-in">
                        <h1>
                            Forgot Your Password <div className="full-stop"></div>{" "}
                        </h1>
                        <p>
                            Click here to <Link to="/Signup" className="sign-b">login </Link>{" "}
                        </p>

                    </div>

                    <form onSubmit={handleSubmit} className="signup-form">
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            name="email"
                            style={{ marginBottom: '20px' }}
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <Button type='submit' fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}>
                            {loading ? 'Sending' : 'Next'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
