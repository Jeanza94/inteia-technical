import { ProductInCart } from "./CartContext";
import { CartState } from "./CartProvider";

type Action = 
| { type:"add-product-to-cart", payload: ProductInCart }
| { type: "sum-total-in-product", payload: {productId: number, count: number} }
| { type: "delete-product-in-cart", payload: {productId: number} }
| { type: "substract-product-by-count", payload: {productId: number, count: number}}

export const cartReducer = (state: CartState, { type, payload }: Action): CartState => {

  switch (type) {
    case "add-product-to-cart":
      return {
        ...state,
        productsInCart: [
          ...state.productsInCart,
          payload
        ]
      }
    case "sum-total-in-product":
      return {
        ...state,
        productsInCart: state.productsInCart.map(product => {
          if (product.id === payload.productId) return {...product, total: product.total + payload.count}
          return product
        })
      }
    case "delete-product-in-cart":
      return {
        ...state,
        productsInCart: state.productsInCart.filter(product => product.id !== payload.productId )
      }
      
    case "substract-product-by-count":
      return {
        ...state,
        productsInCart: state.productsInCart.map(product => {
          if (product.id === payload.productId) return {
            ...product, 
            total: product.total > payload.count ? product.total - payload.count : 0
          }
          return product
        })
      }
    default:
      return {
        ...state
      }
  }
}