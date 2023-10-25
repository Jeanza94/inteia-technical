
import { Grid } from "@mui/material"
import { PaginationProducts } from "../components/PaginationProducts"
import { ProductsContainer } from "../components/ProductsContainer"
import { Slider } from "../../shared/components/Slider"


export const ProductsPage = () => {

  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      alignItems="center"
    >
      <Slider images={[
        "/banners/banner-1.jpg",
        "/banners/banner-2.jpg",
      ]} />
      
      <ProductsContainer />
      <PaginationProducts />

    </Grid>
  )
}
