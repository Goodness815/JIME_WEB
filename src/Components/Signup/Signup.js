import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {



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

          <form className="signup-form">
            <div className="sign-first-last">
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                
              />
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="margin-form"

              />
            </div>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />



            <div className="sign-first-last">
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Password"
                className="margin-form"
                variant="outlined"
              />
{/* 
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              /> */}



            </div>

            <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#182030' }}
            >Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
