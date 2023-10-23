import { FC, PropsWithChildren, useReducer } from "react"
import { ProductContext } from "./ProductContext"
import { Product } from "../interfaces/product"
import { productReducer } from "./productReducer"

export interface ProductState {
  products: Product[]
}

const initailState: ProductState = {
  products: []
}


export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer(productReducer, initailState)

  return (
    <ProductContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
