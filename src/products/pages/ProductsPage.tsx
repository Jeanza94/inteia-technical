
import { Grid, Typography } from "@mui/material"
import { PaginationProducts } from "../components/PaginationProducts"
import { ProductsContainer } from "../components/ProductsContainer"
import { ButtonProductForm } from "../components/ButtonProductForm"

export const ProductsPage = () => {

  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      alignItems="center"
    >
      <Typography
        component="h1"
        variant="h3"
        textAlign="center"
      >
        productos
      </Typography>

      <ButtonProductForm />
      <ProductsContainer />
      <PaginationProducts />

    </Grid>
  )
}
