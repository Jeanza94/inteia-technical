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

const iva = 19 //19%

export const CartProvider:FC<PropsWithChildren> = ({children}) => {
  
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const totalProductsInCart = useMemo(() => {
    if (state.productsInCart.length === 0) return 0
    return state.productsInCart.reduce((sum, product) => sum + product.total , 0)
  }, [state.productsInCart])

  const subTotalPrice = useMemo(() => {
    if (state.productsInCart.length === 0) return 0
    return state.productsInCart.reduce((sum, product) => sum + (product.total * product.price) , 0)
  }, [state.productsInCart])

  const totalPrice = useMemo(() => {
    return (subTotalPrice * (iva/100) + subTotalPrice).toFixed(2)
  }, [subTotalPrice])

  const addProductToCart = (product: Product, count = 1) => {
    
    const isProductInCart = state.productsInCart.some(prod => prod.id === product.id)
    
    if (isProductInCart) return addProductInCartByCount(product.id, count)

    dispatch({type:"add-product-to-cart", payload: {
      ...product,
      total: count
    }})
  }

  const deleteProductInCart = (productId: number) => {
    dispatch({type: "delete-product-in-cart", payload: {productId}})
  }

  const addProductInCartByCount = (productId: number, count=1) => {
    dispatch({type: "sum-total-in-product", payload: {count, productId: productId}})
  }

  const substractProductByCount = (productId: number, count=1) => {
    const product = state.productsInCart.find(prod => prod.id === productId)
    if (!product) return 
    if (count >= product.total) return deleteProductInCart(productId)
    dispatch({type: "substract-product-by-count", payload: {productId, count}})
  }

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
