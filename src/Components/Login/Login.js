import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Login.scss";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  // SHOW AND HIDE PASSWORD

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <div className="container-log">
      <div className="top-nav">
        <div className="logo">ST</div>
        <Link to="/">Home</Link>
        <Link to="/Signup">Join</Link>
      </div>

      <div className="login-cont">
        <div className="login-whole-cont">
          <div className="top-log-in">
            <h5>START FOR FREE</h5>
            <h1>
              Welcome back <div className="full-stop"></div>{" "}
            </h1>
            <p>
              Don't have an Account?{" "}
              <Link to="/Signup" className="sign-b"> Sign up </Link>{" "}
            </p>
          </div>

          <form className="signup-form">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <OutlinedInput
              fullWidth
              // sx={{ width: 280, outline: "white" }}
              className="margin-log"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

            <Button fullWidth size="large" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
