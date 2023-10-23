import { Product } from '../interfaces/product';
import { ProductState } from '../hooks/useProductProvider';


type Action = 
| {type: "set-products", payload: Product[]}
| {type: "set-loading-products", payload: boolean}
| {type: "set-product-page", payload: number}

export const productReducer = (state: ProductState, {payload, type}:Action): ProductState => {
  
  switch (type) {
    case "set-products":
      return {
        ...state,
        products: payload
      }
    case "set-loading-products":
      return {
        ...state,
        loadingProducts: payload
      }
    case "set-product-page":
      return {
        ...state,
        productPage: payload
      }
  
    default:
      return {...state}
  }
}