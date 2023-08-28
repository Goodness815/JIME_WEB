import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "../utils/Pagination";
import { toast } from "react-hot-toast";
import axios from "axios";

const StoreItems = ({ title, loading, allProduct }) => {
  let navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [currentPageData, setCurrentPageData] = useState([]);
  const [cartLoader, setCartLoader] = useState([]);

  const itemsPerPage = 50; // Number of items per page


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ITEMS

  useEffect(() => {
    handlePageChange(1)
  }, [allProduct])

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePageChange = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageData = allProduct.slice(startIndex, endIndex);
    setCurrentPageData(pageData);
    // Scroll to 160vh from the top of the page when a new page is clicked
    const targetOffset = 50 * window.innerHeight / 100; // Calculate the offset in pixels
    if (pageNumber !== 1) {
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth', // Use 'smooth' for smooth scrolling
      });
    }
  };


  const handleAddCart = async (allProduct) => {
    setCartLoader([...cartLoader, allProduct.id])
    try {
      // const res = await axios.post(`http://localhost:5000/api/v1/products/cart`, { id: userData.id, product: allProduct })
      const res = await axios.post(`${process.env.REACT_APP_DEV_URL}/products/cart`, { id: userData.id, product: allProduct })

      setCartLoader(cartLoader.filter(id => id !== allProduct.id))
      if (res.data.success) {
        toast.success('Product added to cart!')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      setCartLoader(cartLoader.filter(id => id !== allProduct.id))
      toast.error(error.message)
    }

  }
  if (loading) {
    return <div className="store-cont-main">
      <div className="stores-cont" style={{ gridTemplateColumns: '60% 40%' }}>
        <h5>Fetching products..</h5>
      </div>

    </div>
  }
  if (currentPageData.length === 0) {
    return <div className="store-cont-main">
      <div className="stores-cont">
        <h5>No Result</h5>
      </div>

    </div>
  }
  return (
    <div className="store-cont-main">
      <h5 className="trending">{title}</h5>

      <hr />
      <div className="stores-cont">
        {loading ?
          <h5>Fetching Products...</h5>
          : <>
            {currentPageData.map((allProduct, i) => {
              const { productName, productDesc, productPrice, productImage, id } = allProduct;
              return (
                <div className="each-product shadow" key={i}>
                  <Card sx={{ maxWidth: 225, cursor: "pointer" }}>
                    <CardMedia
                      component="img"

                      height="150"
                      style={{ objectFit: 'contain', padding: '10px' }}
                      image={productImage}
                      onClick={() => navigate(`/product/${id}`, { state: allProduct })}
                    />
                    <CardContent onClick={() => navigate(`/product/${id}`, { state: allProduct })}>
                      <Typography gutterBottom variant="h5" component="div">
                        {productName}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {productDesc}
                      </Typography>

                      <Typography gutterBottom variant="h6" component="div">
                        &#8358; {formatNumberWithCommas(productPrice)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={(e) => handleAddCart(allProduct)}
                        size="small"
                        variant="light"
                        style={{ backgroundColor: '#182030' }}
                        className="w-100 text-white"
                      >
                        {cartLoader.includes(id) ? 'Adding..' : "Add to cart"}
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </>}



      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={allProduct.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default StoreItems;
