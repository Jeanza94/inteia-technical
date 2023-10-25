
import { Grid } from "@mui/material"
import { PaginationProducts } from "../components/PaginationProducts"
import { ProductsContainer } from "../components/ProductsContainer"


export const ProductsPage = () => {

  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      alignItems="center"
    >
      <ProductsContainer />
      <PaginationProducts />
    </Grid>
  )
}
