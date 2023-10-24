import { Button, Grid, Typography } from "@mui/material";
import { Product } from "../interfaces/product"
import { FC } from 'react';

interface Props {
  product: Product
}

export const ProductDetailCard: FC<Props> = ({ product }) => {
  return (

    <Grid
      container
      padding={2}
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Grid
        item
        xs={12}
        sm={4}
        component="img"
        src={product.images[0]}
        alt={product.title}
        borderRadius={2}
      />


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
          <Button color="secondary" variant="contained">add to the cart</Button>
        </Grid>
      </Grid>
    </Grid>

  )
}
