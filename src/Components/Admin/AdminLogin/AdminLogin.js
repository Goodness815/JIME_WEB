import React, { useState } from "react";
import "./AdminLogin.scss"

// MATERIAL UI IMPORTS
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";


const AdminLogin = () => {
  const adminData = JSON.parse(localStorage.getItem('adminData'))
  const navigate = useNavigate()
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
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/auth/admin`, formData)
      setLoading(false)
      if (res.data.success) {
        toast.success('Login Successful')
        localStorage.setItem('adminData', JSON.stringify(res.data.data))
        navigate('/admin/dashboard')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  if (adminData) {
    return <Navigate to='/admin/dashboard' />
  }

  return (
    <div>
      <React.Fragment sx={{ bgcolor: "#182030" }}>
        <CssBaseline sx={{ bgcolor: "#182030" }} />
        <Container sx={{ bgcolor: "#182030" }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', bgcolor: "#182030", height: "100vh", width: "100%" }}>
            <h1 className="a-l">Admin Login</h1>
            <form onSubmit={handleSubmit} className="signup-form">
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
              <Button type='submit' fullWidth size="large" variant="contained">
                {loading ? 'Logging In' : 'Login'}
              </Button>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </div >
  );
};

export default AdminLogin;
