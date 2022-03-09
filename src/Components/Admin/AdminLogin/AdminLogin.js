import React from "react";
import "./AdminLogin.scss"

// MATERIAL UI IMPORTS
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const AdminLogin = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', bgcolor: "#182030", height: "100vh" }}>
              <h1 className="a-l">Admin Login</h1>
            <form className="admin-form" action="">
              <div className="admin-text-input">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="dense"
                  m="2"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="dense"
                />
              </div>

              <Button type="submit" fullWidth sx={{marginTop: "20px"}} variant="contained">Login</Button>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default AdminLogin;
