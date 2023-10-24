import { ProductInCart } from "./CartContext";
import { CartState } from "./CartProvider";

type Action = 
| { type:"add-product-to-cart", payload: ProductInCart }
| { type: "sum-total-in-product", payload: {productId: number, count: number} }

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
  
    default:
      return {
        ...state
      }
  }
}