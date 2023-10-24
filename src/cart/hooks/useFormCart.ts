import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../../products/context/ProductContext";

interface FormData {
  id: number,
  quantity: string
}

export const useFormCart = () => {
  
  const { addProductToCart } = useContext(CartContext)
  const { products } = useContext(ProductContext)

  const { register, handleSubmit, formState: {errors}, reset } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = ({id, quantity}) => {
    const product = products.find(product => id === product.id)
    addProductToCart(product!, +quantity )
    reset()
  }

  return {
    errors,
    products,
    handleSubmit,
    onSubmit,
    register
  }
}