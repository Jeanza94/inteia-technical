import { Box } from "@mui/material"
import { FormCart } from "../components/FormCart";


export const CartPage = () => {

  return (
    <Box
      sx={{display:"flex"}}
      flexDirection="column"
      alignItems="center"
      mt={2}
    >
     
      <FormCart />
    </Box>
  )
}
