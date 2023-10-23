import { Product } from '../interfaces/product';
import { ProductState } from './ProductProvider';

type Action = 
| {type: "set-products", payload: Product[]}
| {type: "set-loading-products", payload: boolean}

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
  
    default:
      return {...state}
  }
}