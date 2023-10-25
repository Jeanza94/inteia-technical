import { Grid } from '@mui/material';
import { Slider } from '../components/Slider';
import { useContext, useEffect, useMemo } from 'react';
import { ProductContext } from '../../products/context/ProductContext';
import { SkeletonProductCard } from '../../products/components/SkeletonProductCard';
import { ProductCard } from '../../products/components/ProductCard';


export const HomePage = () => {
  
  const {products, loadingProducts} = useContext(ProductContext)

  useEffect(() => {
    document.title = "Market - inteia"
  }, [])

  const productsToShow = useMemo(() => {
    return products.slice(0, 4)
  }, [products])

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
      
      {
        loadingProducts
          ? [1,2,3,4].map(elem => (
            <SkeletonProductCard key={elem}/>
          ))
          : (
            <Grid
              container
              justifyContent="center"
              flexWrap="wrap"
              gap={4}
            >
              {
                productsToShow.map(product => (
                  <ProductCard key={product.id} product={product}/>
                ))
              }
            </Grid>
          )
      }

    </Grid>
  )
}
