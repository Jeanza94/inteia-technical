import { FC, useContext, useState } from 'react';
import { Button, Grid, Typography } from "@mui/material"
import { Product } from "../interfaces/product"
import { CartContext } from '../../cart/context/CartContext';

interface Props {
  product: Product
}

export const ProductDetailCard: FC<Props> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const [imageIndex, setimageIndex] = useState(0)


  return (

    <Grid
      container
      padding={2}
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Grid
        container
        item
        xs={12}
        sm={3}
      >
        <Grid
          item
          xs={12}
          component="img"
          src={product.images[imageIndex]}
          alt={product.title}
          borderRadius={2}
        />
        {
          product.images.length > 1
            ? (
              <Grid
                container
                width="100%"
                padding={1}
                justifyContent="center"
                gap={2}
              >
                {
                  product.images.map((image, index) => (
                    <Grid
                      key={index}
                      item
                      xs={2}
                      component="img"
                      src={image}
                      alt={product.title}
                      borderRadius={2}
                      sx={{cursor:"pointer"}}
                      onClick={() => setimageIndex(index)}
                      title={`Change to image ${index + 1}`}
                    />
                  ))
                }
              </Grid>
            )
            : null
        }

      </Grid>


      <Grid
        item
        xs={12}
        sm={7}
        padding={2}
        container
        flexDirection="column"
        gap={1}
      >
        <Typography
          component="h1"
          variant="h5"
          fontWeight="bold"
          color="primary"
        >
          {product.title}
        </Typography>
        <Typography component="h3" variant="h6"><strong>Id:</strong> {product.id}</Typography>
        <Typography component="p" variant="body1">{product.description}</Typography>

        <Grid container alignItems="center" justifyContent="space-between">
          <Typography component="span" variant="body1">${product.price}</Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => addProductToCart(product, 1)}
          >
            add to the cart
          </Button>
        </Grid>
      </Grid>
    </Grid>

  )
}
