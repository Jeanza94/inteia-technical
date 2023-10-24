import { Category, Product } from '../interfaces/product';
import { ProductState } from '../hooks/useProductProvider';


type Action =
  | { type: "set-products", payload: Product[] }
  | { type: "add-product", payload: Product }
  | { type: "set-loading-products", payload: boolean }
  | { type: "set-product-page", payload: number }
  | { type: "set-categories", payload: Category[] }

export const productReducer = (state: ProductState, { payload, type }: Action): ProductState => {

  switch (type) {
    case "set-products":
      return {
        ...state,
        products: payload
      }
    case "add-product":
      return {
        ...state,
        products: [
          ...state.products,
          payload
        ]
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

    case "set-categories":
      return {
        ...state,
        categories: payload
      }

    default:
      return { ...state }
  }
}