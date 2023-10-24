import { Box } from "@mui/material"
import { FormCart } from "../components/FormCart";
import { TableProductsInCart } from "../components/TableProductsInCart";


export const CartPage = () => {

  return (
    <Box
      sx={{display:"flex"}}
      flexDirection="column"
      alignItems="center"
      mt={2}
      gap={2}
      p={2}
    >
     
      <FormCart />
      <TableProductsInCart />
    </Box>
  )
}
