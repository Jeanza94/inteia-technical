import { Card, CardActions, CardHeader, CardMedia, CircularProgress, IconButton } from "@mui/material"
import { Product } from "../interfaces/product"
import { FC, useContext, useState } from 'react';
import { Delete } from "@mui/icons-material";
import { ProductContext } from "../context/ProductContext";
import { getPopUpConfirmedAnswer } from "../../alerts";
import { Link } from "react-router-dom";

interface Props {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {

  const { removeProductById } = useContext(ProductContext)
  const [isDeleting, setIsDeleting] = useState(false)

  const removeProduct = async () => {
    const yes = await getPopUpConfirmedAnswer({
      cancelButtonText: "No, i don't want",
      confirmButtonText: "Yes, delete the product",
      text: `are you sure you want to delete the product "${product.title}"?`,
      title: `Delete ${product.title}`
    })
    
    if (!yes) return

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
          to={`/product/${slug}-${product.id}`}
        >
          Details
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
