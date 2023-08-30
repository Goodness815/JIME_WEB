import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./reset.scss";

const ResetPass = () => {
    const navigate = useNavigate()
    const { userId, token } = useParams()
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
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
        if (formData.password !== formData.confirmPassword) {
            return toast.error('Passwords do not match!')
        }
        setLoading(true)
        try {
            // const res = await axios.post(`http://localhost:5000/api/v1/auth/resetpassword`, { userId, token, password: formData.password })
            const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/reset`, { userId, token, password: formData.password })
            setLoading(false)
            if (res.data.success) {
                toast.success('Password changed sucessfully!')
                navigate('/login')
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
                <Link to="/">Home</Link>
            </div>

            <div className="login-cont">
                <div className="login-whole-cont">
                    <div className="top-log-in">
                        <h1>
                            Change your password <div className="full-stop"></div>{" "}
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="signup-form">

                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            className="passwordField"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            className="passwordField"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <Button type='submit' fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}>
                            {loading ? 'Changing..' : 'Change Password'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;
