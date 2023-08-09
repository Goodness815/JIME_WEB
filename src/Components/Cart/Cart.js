import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import "./Cart.scss";

// MATERIAL UI IMPORTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";

// MATERIAL IMPORTS 2
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
}, [])


  // QUANTITY INCREMENT
  const [count, setCount] = React.useState(1);
  const products = [
    {
      store: "Kunda Store",
      name: "kunda",
      price: "3000",
      description: "We sell content creationm",
      id: 1,
      rating: 2,
    },
    {
      id: 2,
      store: "Rock Store",
      name: "Rocky Jacket",
      price: "5000",
      size: "12-18",
      description: " deliver to you guys at... Lorem ipsum",
      rating: 3,
    },
    {
      id: 3,
      store: "Darwin Store",
      name: "Darwins Collection",
      price: "10000",
      size: "16-40",
      description: "content creation and deliver ",
      rating: 1,
    },
    {
      id: 4,
      store: "Art Market",
      name: "Monalisa",
      price: "6000",
      size: "8-40",
      description: "We sell ",
      rating: 5,
    },
    {
      id: 5,
      store: "Dara Store",
      name: "Dara Collection",
      price: "4000",
      size: "8-11",
      description: " Lorem ipsum",
      rating: 0,
    },
    {
      store: "Tim Store",
      name: "Plier",
      price: "3000",
      size: "39-47",
      description: "We sell content creationm",
      id: 6,
      rating: 4,
    },
    {
      id: 7,
      store: "Mercy Store",
      name: "The M collection",
      price: "3000",
      description: " deliver to you guys at... Lorem ipsum",
      rating: 4,
    },
    {
      id: 8,
      store: "Esther Shoe Store",
      name: "Mocassin",
      price: "15000",
      size: "6-11",
      description: "content creation and deliver ",
    },
    {
      id: 9,
      store: "Fan Market",
      name: " Ox StandingFan",
      price: "30000",
      description: "We sell ",
      rating: 2,
    },
    {
      id: 10,
      store: "Electrical AppStore",
      name: "Samsung 40' Led  Tv",
      price: "100000",
      size: "40'",
      description: " Lorem ipsum",
      rating: 1,
    },
    {
      store: "Rema Phone Store",
      name: "Iphone 12",
      price: "600000",
      size: "64gb",
      description: "We sell content creationm",
      id: 11,
      rating: 5,
    },
  ];

  return (
    <div className="home-whole-cont">
      <Sidenav />

      <div className="cart-cont">
        <Topnav />

        <div className="cart-w-c">
          {products.map((allProduct) => {
            const { name, price, description } = allProduct;
            return (
              <Card
                className="cart-card"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography component="h5" variant="h5">
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="p"
                    >
                      {description}{" "}
                    </Typography>

                    <b>&#8358;{price}</b>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    {/* <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? (
                        <SkipNextIcon />
                      ) : (
                        <SkipPreviousIcon />
                      )}
                    </IconButton> */}
                    {/* <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton> */}

                    <div>
                      <ButtonGroup>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount(Math.max(count - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Badge color="secondary" badgeContent={count}>
                          {/* <MailIcon /> */}
                        </Badge>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image="https://files.muzli.space/f61acff7f4c13467e871ee76e5e49459.jpeg"
                />
              </Card>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
