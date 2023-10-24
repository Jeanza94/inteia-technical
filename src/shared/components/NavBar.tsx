import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Badge, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../cart/context/CartContext";


export const NavBar = () => {
  const { totalProductsInCart } = useContext(CartContext)
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link to="/">
          <Typography
            variant="h5"
            color="white"
            sx={{ textDecoration: "none" }}
          >
            School market
          </Typography>
        </Link>
        <Grid>
          <Link to="/product/cart">
            <Badge 
              badgeContent={totalProductsInCart}
              color="error"
              max={99}
            >
              <IconButton title="see the products in your cart">
                <ShoppingCart color="secondary" fontSize="small" />
              </IconButton>
            </Badge>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
