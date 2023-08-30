import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Signup.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    // Add more fields here if needed
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
    setLoading(true)
    try {
      // const res = await axios.post(`http://localhost:5000/api/v1/auth/register`, formData)
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/register`, formData)
      setLoading(false)
      if (res.data.success) {
        toast.success('Registered Successfully')
        localStorage.setItem('userData', JSON.stringify(res.data.data))
        navigate('/')
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
    <div className="container-sign">

      <div className="top-nav">
        {/* <div className="logo">ST</div> */}
        <Link to="/">Home</Link>
        {/* <Link to="/Signup">Join</Link> */}

      </div>

      <div className="signup-cont">

        <div className="signup-whole-cont">
          <div className="top-sign-up">
            {/* <h5>START FOR FREE</h5> */}
            <h1>
              Create new account <div className="full-stop"></div>{" "}
            </h1>
            <p>
              Already a member? <Link to="/Login" className="log-in-sign"> Log in </Link>{" "}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="sign-first-last">
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{ borderColor: "white" }}

              />
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="margin-form"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required

              />
            </div>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />



            <div className="sign-first-last">
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Password"
                className="margin-form"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

            </div>

            <Button type="submit" fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}
            >{loading ? 'Signing Up' : 'Sign Up'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
