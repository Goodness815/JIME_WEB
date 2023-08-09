import React, { useEffect, useState } from "react";
import "./AdminProducts.scss";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdminTopnav from "../AdminTopnav/AdminTopnav";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// BOOTSTRAP
import Modal from "react-bootstrap/Modal";

const AdminProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // MODAL

  const [show, setShow] = useState(false);


  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };


  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };

  const [show2, setShow2] = useState(false);



  const handleCloseEdit = (e) => {
    setShow2(false);
    setShow(true);
    // setLoading(false);
  };


  const handleShowEdit = (e) => {
    // setLoading(true);
    setShow2(true);
    setShow(false);
  };


  // ALL PRODUCTS TO DISPLAY
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
    {
      id: 12,
      store: "Rock Store",
      name: "Rocky Stripe Shirt",
      price: "12000",
      size: "10-18",
      description: " deliver to you guys at... Lorem ipsum",
      rating: 2,
    },
    {
      id: 13,
      store: "Esther Shoe Store",
      name: "Brown Loafers",
      price: "80000",
      size: "6-11",
      description: "content creation and deliver ",
    },
    {
      id: 14,
      store: "Rema Phone Store",
      name: "Iphone 12",
      price: "400000",
      size: "512gb",
      description: "We sell ",
    },
    {
      id: 15,
      store: "Electrical AppStore",
      name: "LG Smart 4k Tv",
      price: "12000000",
      size: "50'",
      description: " Lorem ipsum",
    },
    {
      id: 16,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 17,
      store: "Art Market",
      name: "Da Vinci",
      price: "600000",
      size: "8-40",
      description: " Lorem ipsum",
    },
    {
      id: 18,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 19,
      store: "Fan Market",
      name: " Samsung Fan",
      price: "350000",
      description: " Lorem ipsum",
    },
    {
      id: 20,
      store: "Art Market",
      name: "Leonado",
      price: "6000",
      size: "8-40",
      description: " Lorem ipsum",
    },
    {
      id: 21,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 22,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },
    {
      id: 23,
      store: "Fan Market",
      name: " Lg StandingFan",
      price: "30000",
      description: " Lorem ipsum",
    },
    {
      id: 24,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },
    {
      id: 25,
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },
    {
      id: 26,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 27,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 28,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 29,
      img: "storeimg",
      store: "Fan Market",
      name: " Ox ceiling Fan",
      price: "40000",
      description: " Lorem ipsum",
    },

    {
      id: 30,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 31,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 32,
      img: "storeimg",
      store: "Fan Market",
      name: " Ox AC",
      price: "300000",
      description: " Lorem ipsum",
    },

    {
      id: 33,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 34,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 35,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },
    {
      id: 36,
      img: "storeimg",
      store: "Fan Market",
      name: "Huawei StandingFan",
      price: "10000",
      description: " Lorem ipsum",
    },
    {
      id: 37,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 38,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 39,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 40,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 41,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 42,
      img: "storeimg",
      store: "Fan Market",
      name: " Sony StandingFan",
      price: "150000",
      description: " Lorem ipsum",
    },

    {
      id: 43,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 44,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 45,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 46,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 47,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 48,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 49,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 50,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 51,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 52,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 53,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 54,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 55,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 56,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 57,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 58,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 59,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 60,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 61,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 62,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 63,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 64,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 65,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 66,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 67,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 68,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 69,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 70,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },

    {
      id: 71,
      img: "storeimg",
      name: "Dara Store",
      price: "3000",
      size: "12-18",
      description: " Lorem ipsum",
    },
  ];

  return (
    <div className="admin-w-c">
      <AdminTopnav />

      <hr />

      <div className="admin-p-c">
        {products.map((allProduct) => {
          const { name, price, description } = allProduct;
          return (
            <div className="each-apc">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://images.unsplash.com/photo-1642779453406-5345499cf2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGdsYXNzZXMlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>

                  <Typography gutterBottom variant="body" component="text">
                    {description}
                  </Typography>

                  <Typography
                    sm={{ fontSize: "12px !important" }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {" "}
                    &#8358;
                    {price}
                  </Typography>
                  {/* <Typography gutterBottom variant="h6" component="div">
                    {size}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  {/* {loading ? (
                    <>
                      <div className="disabled"> Loading...</div>
                    </>
                  ) : (
                    <>

                    </>
                  )} */}
                  <Button onClick={handleShow} variant="contained" size="small">
                    View
                  </Button>{" "}
                  {/* <Button size="small">Learn More</Button> */}
                  <DeleteOutlineOutlinedIcon />
                </CardActions>
              </Card>
            </div>
          );
        })}


        {/* MODAL DETAILS PRODUCTS */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
            <p> <b>Description: </b> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>

            <hr />

            <h4>Add-ons</h4>
            <form action="">
              <label htmlFor=""> Color</label>
              <br />
              <input type="color" />  

              <br />
              <label htmlFor="">Size</label>
              <br />
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>  
              </select>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShowEdit}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>


        {/* EDIT PRODUCTS */}
        <Modal show={show2} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
            {/* <p> <b>Description: </b> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>

            <hr />

            <h4>Add-ons</h4>
            <form action="">
              <label htmlFor=""> Color</label>
              <br />
              <input type="color" />  

              <br />
              <label htmlFor="">Size</label>
              <br />
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>  
              </select>
            </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminProducts;
