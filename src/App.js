import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout";
import SingleProduct from "./Components/Product/SingleProduct";
import Cart from "./Components/Cart/Cart";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminProducts from "./Components/Admin/AdminProducts/AdminProducts";
// import Stores from "./Components/Stores/Stores";
import { Toaster } from 'react-hot-toast';
import "./App.css";
import Orders from "./Components/orders/Orders";
import SearchResult from "./Components/Stores/SearchResult";
import ForgotPassword from "./Components/resetPassword/ForgotPassword";
import ResetPass from "./Components/resetPassword/ResetPassword";


function App() {



  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
            exact
          />
          <Route path="/admin" element={<AdminLogin />} exact />
          <Route path="/admin/dashboard" element={<AdminProducts />} exact />

          <Route path="/product/:id" element={<SingleProduct />} exact />
          <Route path="/search/:searchQuery" element={<SearchResult />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/orders" element={<Orders />} exact />


          <Route path="/forgot" element={<ForgotPassword />} exact />
          <Route path="/forgot/:userId/:token" element={<ResetPass />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
