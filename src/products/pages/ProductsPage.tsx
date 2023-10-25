
import { Grid } from "@mui/material"
import { PaginationProducts } from "../components/PaginationProducts"
import { ProductsContainer } from "../components/ProductsContainer"
import { useEffect } from 'react';


export const ProductsPage = () => {

  useEffect(() => {
    document.title = "Products market"
  }, [])

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
