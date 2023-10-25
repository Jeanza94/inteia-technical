import { ShoppingCart, Store } from "@mui/icons-material"
import { AppBar, Badge, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../cart/context/CartContext";



export const NavBar = () => {
  const { totalProductsInCart } = useContext(CartContext)
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar
        component="nav"
        sx={{
          height: 64,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "link-active" : "link-hover"}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Store color="secondary" fontSize="large" />
            <Typography
              component="span"
              variant="h5"
              color="white"
            >
              Market
            </Typography>
          </Grid>
        </NavLink>
        <Grid
          container
          width={150}
          justifyContent="space-between"
          alignItems="center"
        >
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? "link-active" : "link-hover"}
          >
            <Typography
              variant="h6"
              component="span"
              color="white"
              sx={{ textDecoration: "none" }}
            >
              Products
            </Typography>
          </NavLink>
          <NavLink
            to="/products-cart"
            className="link-hover"
          >
            <Badge
              badgeContent={totalProductsInCart}
              color="error"
              max={99}
            >
              <IconButton title="see the products in your cart" sx={{ padding: 0 }}>
                <ShoppingCart color="secondary" fontSize="small" />
              </IconButton>
            </Badge>
          </NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
