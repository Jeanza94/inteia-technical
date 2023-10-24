import { Card, CardActions, CardHeader, CardMedia, CircularProgress, IconButton, Link } from "@mui/material"
import { Product } from "../interfaces/product"
import { FC, useContext, useState } from 'react';
import { Delete } from "@mui/icons-material";
import { ProductContext } from "../context/ProductContext";

interface Props {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {

  const { removeProductById } = useContext(ProductContext)
  const [isDeleting, setIsDeleting] = useState(false)

  const removeProduct = async () => {
    setIsDeleting(true)
    await removeProductById(product.id)
    setIsDeleting(false)
  }

  const slug = encodeURIComponent(product.title.toLowerCase().replace(/\s/g, "_"))

  return (
    <Card sx={{ width: 200 }}>
      <CardHeader
        title={product.title}
        subheader={product.category.name}
      />

      <CardMedia
        component="img"
        height="200"
        image={product.images[0]}
        alt={product.title}
      />

      <CardActions sx={{ justifyContent: "space-between" }}>

        <Link
          href={`/product/${slug}-${product.id}`}
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          See product
        </Link>

        {
          isDeleting
            ? <CircularProgress size={30} />
            : (
              <IconButton
                title={`Delete product - ${product.title}`}
                onClick={removeProduct}
              >
                <Delete color="error" fontSize="small" />
              </IconButton>
            )
        }


      </CardActions>
    </Card>
  )
}
