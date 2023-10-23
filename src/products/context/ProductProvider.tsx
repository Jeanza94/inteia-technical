import { FC, PropsWithChildren, useReducer } from "react"
import { ProductContext } from "./ProductContext"
import { Product } from "../interfaces/product"
import { productReducer } from "./productReducer"
import { getProductsFromApi } from "../api"

export interface ProductState {
  products: Product[],
  loadingProducts: boolean
}

const initailState: ProductState = {
  products: [],
  loadingProducts: false
}

export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer(productReducer, initailState)

  const setProducts = (products: Product[]) => {
    dispatch({type: "set-products", payload: products})
  }

  const setLoadingProductsToFalse = () => {
    dispatch({type: "set-loading-products", payload: false })
  }

  const setLoadingProductsToTrue = () => {
    dispatch({type: "set-loading-products", payload: true })
  }

  const setProductsFromApi = async() => {
    setLoadingProductsToTrue()
    const products = await getProductsFromApi()

    if (products) {
      setProducts(products)
    }
    setLoadingProductsToFalse()
    
  }

  return (
    <ProductContext.Provider
      value={{
        ...state,
        setProductsFromApi
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
