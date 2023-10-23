import { Product } from '../interfaces/product';
import { ProductState } from './ProductProvider';

type Action = 
| {type: "set-products", payload: Product[]}

export const productReducer = (state: ProductState, {payload, type}:Action): ProductState => {
  
  switch (type) {
    case "set-products"
      return {
        ...state,
        products: payload
      }
      
  
    default:
      return {...state}
  }
}