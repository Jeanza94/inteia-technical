import { useContext, useMemo } from "react"
import { Button, Grid, Typography } from "@mui/material"
import { ProductContext } from "../context/ProductContext"
import { ProductCard } from "../components/ProductCard"
import { Add } from "@mui/icons-material"
import { PaginationProducts } from "../components/PaginationProducts"

export const ProductsPage = () => {

  const {
    loadingProducts, productPage, products,
  } = useContext(ProductContext)

  const productsToShow = useMemo(() => {
    if (products.length === 0) return products
    const initialIndex = (productPage - 1) * 20
    const finalIndex = productPage * 20
    return products.slice(initialIndex, finalIndex)
  }, [productPage, products])

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
      <Grid
        container
        gap={1}
        justifyContent="center"
      >
        {
          loadingProducts
            ? <p>cargando....</p>
            : productsToShow.length === 0
              ? <p>no hay productos</p>
              : productsToShow.map(product => (
                <ProductCard product={product} key={product.id} />
              ))
        }
      </Grid>

     <PaginationProducts />

    </Grid>
  )
}
