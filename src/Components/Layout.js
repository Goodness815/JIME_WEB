import React from 'react'
import Sidenav from './Sidenav/Sidenav';
import {Box } from "@mui/material"
import "../../src/App.css"
const Layout = ({ children }) => {
    return (
  
        <Box className='layout-cont' display="flex" fullWidth>
          {/* <Sidenav/> */}
          <div className="children-compp">
            {children}
          </div>
        </Box>
    );
  };
  
  export default Layout;