import { Card, CardHeader, CardMedia } from "@mui/material"
import { Product } from "../interfaces/product"
import { FC } from 'react';

interface Props {
  product: Product
}

export const ProductCard:FC<Props> = ({product}) => {
  return (
    <Card sx={{width: 200}}>
      <CardHeader
        title={product.title}
        subheader={product.category.name}
        cla
      />
        
      <CardMedia 
        component="img"
        height="200"
        image={product.images[0]}
        alt={product.title}
      />

    </Card>
  )
}
