
import { Button, Grid, Typography } from "@mui/material"
import { Add } from "@mui/icons-material"
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
      <Typography
        component="h1"
        variant="h3"
        textAlign="center"
      >
        productos
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        sx={{ textTransform: "none" }}
      >
        Add product
      </Button>

      <ProductsContainer />

      <PaginationProducts />

    </Grid>
  )
}
