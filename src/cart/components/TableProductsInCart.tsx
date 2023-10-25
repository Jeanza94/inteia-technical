import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ArrowCircleDown, ArrowCircleUp, Delete } from "@mui/icons-material";

export const TableProductsInCart = () => {

  const {
    productsInCart, subTotalPrice, totalPrice,
    addProductInCartByCount, deleteProductInCart, substractProductByCount
  } = useContext(CartContext)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>

        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price $</TableCell>
            <TableCell>Total price $</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            productsInCart.map(product => {
              const slug = encodeURIComponent(product.title.toLowerCase().replace(/\s/g, "_"))
              return (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.total}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.total * product.price}</TableCell>
                  <TableCell>
                    <Link to={`/product/${slug}-${product.id}`}>Details</Link>
                    <IconButton
                      onClick={() => deleteProductInCart(product.id)}
                      title={`Delete product - ${product.title}`}
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>

                    <IconButton
                      onClick={() => substractProductByCount(product.id, 1)}
                      title="Substract one product"
                    >
                      <ArrowCircleDown fontSize="small" />
                    </IconButton>
                    
                    <IconButton
                      onClick={() => addProductInCartByCount(product.id, 1)}
                      title="add one product"
                    >
                      <ArrowCircleUp fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })
          }

          <TableRow>
            <TableCell colSpan={3} />
            <TableCell>Subtotal</TableCell>
            <TableCell>{subTotalPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} />
            <TableCell>Iva</TableCell>
            <TableCell>19%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} />
            <TableCell>Total</TableCell>
            <TableCell>{totalPrice}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
