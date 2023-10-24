import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Product } from "../interfaces/product";
import { getProductFromApiById } from "../api/products";
import { ProductDetailCard } from "../components/ProductDetailCard";
import { SkeletonProductDetail } from "../components/SkeletonProductDetail";

export const ProductDetailPage = () => {

  const [product, setProduct] = useState<Product | null>(null) 
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)

  useEffect(() => {
    getProduct()
  }, [])

  const { slugId } = useParams()
  const id = slugId?.split("-")[1]

  const getProduct = async() => {
    if (!id || isNaN(+id)) {
      setIsLoadingProduct(true)
      return
    }
    
    const product = await getProductFromApiById(+id)
    if (product) {
      setProduct(product)
    }
    setIsLoadingProduct(false)

  }

  
  return (
    <Box
      sx={{display:"flex"}}
      flexDirection="column"
      alignItems="center"
    >
      {
        isLoadingProduct
          ? <SkeletonProductDetail />
          : product 
            ? <ProductDetailCard product={product}/>
            : <p>no existe el producto con el id {id}</p>
      }
    </Box>
  )
}
