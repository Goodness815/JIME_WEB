import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Login.scss";

const Login = () => {
  // SHOW AND HIDE PASSWORD

  // const [values, setValues] = React.useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };


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
          </div>

          <form className="signup-form">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="passwordField"
            />
            <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
