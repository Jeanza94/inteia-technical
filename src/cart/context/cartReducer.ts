import { ProductInCart } from "./CartContext";
import { CartState } from '../hooks/useCartProvider';


type Action = 
| { type: "set-products-in-cart", payload: ProductInCart[]}
| { type:"add-product-to-cart", payload: ProductInCart }
| { type: "sum-total-in-product", payload: {productId: number, count: number} }
| { type: "delete-product-in-cart", payload: {productId: number} }
| { type: "substract-product-by-count", payload: {productId: number, count: number}}

export const cartReducer = (state: CartState, { type, payload }: Action): CartState => {

  switch (type) {
    case "set-products-in-cart":
      return {
        ...state,
        productsInCart: payload
      }
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