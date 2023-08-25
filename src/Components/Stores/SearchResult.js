import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import "./Stores.scss";

// MATERIAL UI IMPORTS
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer"
import axios from "axios";
import StoreItems from "../Home/StoreItems";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const SearchResult = () => {
  const { searchQuery } = useParams()
  const search = useLocation().state
  const [searchTerm, setSearchTerm] = useState(JSON.parse(localStorage.getItem('searchQuery')));
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/products/search?q=${search || searchQuery}`)
      setLoading(false)
      setResults(response.data.data);
      setSearchTerm(response.data.searchTerm);
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }
  };


  useEffect(() => {
    handleSearch()
  }, [search])



  return (
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div
          className="whole-categories-cont"
        >

          <StoreItems title={`Showing result for: ${searchTerm}`} loading={loading} allProduct={results} />

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SearchResult;
