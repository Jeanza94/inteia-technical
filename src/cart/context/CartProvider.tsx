import { FC, PropsWithChildren } from 'react';
import { CartContext } from "./CartContext"
import { useCartProvider } from "../hooks";

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {

  const {
    state,
    subTotalPrice,
    totalPrice,
    totalProductsInCart,
    addProductToCart,
    addProductInCartByCount,
    deleteProductInCart,
    substractProductByCount,
  } = useCartProvider()


  return (
    <CartContext.Provider
      value={{
        ...state,
        subTotalPrice,
        totalPrice,
        totalProductsInCart,

        addProductToCart,
        addProductInCartByCount,
        deleteProductInCart,
        substractProductByCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
