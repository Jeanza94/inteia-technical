import { useContext, useMemo } from "react"
import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "../context/ProductContext"
import { SkeletonProductCard } from "./SkeletonProductCard"


export const ProductsContainer = () => {
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
      gap={1}
      justifyContent="center"
    >
      {
        loadingProducts
          ? [1,2,3,4].map(elem => <SkeletonProductCard key={elem} />)
          : productsToShow.length === 0
            ? <p>no hay productos</p>
            : productsToShow.map(product => (
              <ProductCard product={product} key={product.id} />
            ))
      }
    </Grid>
  )
}
