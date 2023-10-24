import { Box, Chip } from "@mui/material"
import { FormCart } from "../components/FormCart";
import { TableProductsInCart } from "../components/TableProductsInCart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { RemoveShoppingCart } from "@mui/icons-material";


export const CartPage = () => {

  const {totalProductsInCart} = useContext(CartContext)

  return (
    <Box
      sx={{display:"flex"}}
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
    >
     
      <FormCart />
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
