import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [formData, setFormData] = useState({
    email: '',
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
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/login`, formData)
      setLoading(false)
      if (res.data.success) {
        toast.success('Login Successful')
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
              Welcome back <div className="full-stop"></div>{" "}
            </h1>
            <p>
              Don't have an Account?{" "}
              <Link to="/Signup" className="sign-b"> Sign up </Link>{" "}
            </p>
            <p>
              Can't remember your password?{" "}
              <Link to="/forgot" className="sign-b"> Forgot password </Link>{" "}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="passwordField"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Button type='submit' fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}>
              {loading ? 'Logging In' : 'Login'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
