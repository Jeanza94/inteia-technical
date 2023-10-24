import { CartContext, ProductInCart } from "./CartContext"
import { useReducer, FC, PropsWithChildren, useMemo } from 'react';
import { cartReducer } from "./cartReducer";
import { Product } from "../../products/interfaces/product";


export interface CartState {
  productsInCart: ProductInCart[]
}

const initialState: CartState = {
  productsInCart: []
}

export const CartProvider:FC<PropsWithChildren> = ({children}) => {
  
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const totalProductsInCart = useMemo(() => {
    if (state.productsInCart.length === 0) return 0
    return state.productsInCart.reduce((sum, product) => sum + product.total , 0)
  }, [state.productsInCart])

  const addProductToCart = (product: Product, count = 1) => {
    
    const isProductInCart = state.productsInCart.some(prod => prod.id === product.id)
    
    if (isProductInCart) {
      dispatch({type: "sum-total-in-product", payload: {count, productId: product.id}})
      return
    }

    dispatch({type:"add-product-to-cart", payload: {
      ...product,
      total: count
    }})
  }


  return (
    <CartContext.Provider
      value={{
        ...state,
        totalProductsInCart,

        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
