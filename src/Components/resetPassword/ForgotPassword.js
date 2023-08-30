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

    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    function generateRandomStringsArray(count, length) {
        const randomStringsArray = [];
        for (let i = 0; i < count; i++) {
            const randomString = generateRandomString(length - 2); // Reserve space for special character
            const specialCharacter = '!@#$%^&*()';
            const randomIndex = Math.floor(Math.random() * specialCharacter.length);
            const stringWithSpecialChar =
                randomString.slice(0, randomIndex) +
                specialCharacter[randomIndex] +
                randomString.slice(randomIndex);
            randomStringsArray.push(stringWithSpecialChar);
        }
        return randomStringsArray;
    }

    function getSelectedString(stringsArray) {
        if (!Array.isArray(stringsArray) || stringsArray.length === 0) {
            return null; // Handle invalid input
        }

        if (stringsArray.length === 1) {
            return stringsArray[0]; // Return the only available string
        }

        const arrayLength = stringsArray.length;
        let previousIndex = -1;

        function getRandomUniqueIndex() {
            let newIndex = Math.floor(Math.random() * arrayLength);
            while (newIndex === previousIndex) {
                newIndex = Math.floor(Math.random() * arrayLength);
            }
            return newIndex;
        }

        const newIndex = getRandomUniqueIndex();
        previousIndex = newIndex;

        return stringsArray[newIndex];
    }



    const numberOfStrings = 30;
    const stringLength = 8;


    const handleSubmit = async (e) => {
        e.preventDefault()
        // const randomArray = generateRandomStringsArray(numberOfStrings, stringLength)
        // console.log(randomArray)
        // const selectedString = getSelectedString(randomArray)
        // console.log(selectedString)
        // console.log(randomArray.includes(selectedString))
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
