import { useContext, useMemo } from "react"
import { Button, Grid, IconButton, Typography } from "@mui/material"
import { ProductContext } from "../context/ProductContext"
import { ProductCard } from "../components/ProductCard"
import { Add, ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material"

export const ProductsPage = () => {

  const {
    loadingProducts, page, products,
    nextPage, previousPage
  } = useContext(ProductContext)

  const productsToShow = useMemo(() => {
    if (products.length === 0) return products
    const initialIndex = (page - 1) * 20
    const finalIndex = page * 20
    return products.slice(initialIndex, finalIndex)
  }, [page, products])

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

      <Grid container gap={1} justifyContent="center">
        <IconButton onClick={previousPage} color="primary" title="Previous page">
          <ArrowCircleLeft />
        </IconButton>
        <IconButton onClick={nextPage} color="primary" title="Next page">
          <ArrowCircleRight />
        </IconButton>
      </Grid>

    </Grid>
  )
}
