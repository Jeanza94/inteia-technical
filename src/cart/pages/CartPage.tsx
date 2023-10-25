import { Box, Chip } from "@mui/material"
import { FormCart } from "../components/FormCart";
import { TableProductsInCart } from "../components/TableProductsInCart";
import { useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";
import { RemoveShoppingCart } from "@mui/icons-material";
import { ButtonProductForm } from "../../products/components/ButtonProductForm";


export const CartPage = () => {

  const {totalProductsInCart} = useContext(CartContext)
  
  useEffect(() => {
    document.title = "Products in cart"
  }, [])

  return (
    <Box
      sx={{display:"flex"}}
      flexDirection="column"
      alignItems="center"
      gap={2}
      width="100%"
      mx={2}
      mt={2}
    >
      <FormCart />
      <ButtonProductForm />
      {
        totalProductsInCart > 0
          ? <TableProductsInCart />
          : (
            <Chip 
              icon={<RemoveShoppingCart fontSize="small" />} 
              label="There are not products in cart yet"
              color="error"
            />
          )

      }
      
    </Box>
  )
}
