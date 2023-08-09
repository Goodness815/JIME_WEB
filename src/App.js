
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout";
import SingleProduct from "./Components/Product/SingleProduct";
import Cart from "./Components/Cart/Cart";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminProducts from "./Components/Admin/AdminProducts/AdminProducts";
import Stores from "./Components/Stores/Stores";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
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
                    <Route path="/productsadmin" element={<AdminProducts />} exact />
                    <Route path="/store" element={<Stores />} exact />

          <Route path="/product" element={<SingleProduct />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/admin" element={<AdminLogin />} exact />


          <Route path="/Login" element={<Login />} exact />
          <Route path="/Signup" element={<Signup />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
