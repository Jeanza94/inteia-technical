

import { useReducer } from "react"
import { getProductsFromApi } from "../api"
import { productReducer } from "../context/productReducer"
import { Product } from "../interfaces/product"

export interface ProductState {
  loadingProducts: boolean,
  productPage: number,
  products: Product[],
}

const initailState: ProductState = {
  loadingProducts: false,
  productPage: 1,
  products: [],
  
}

export const useProductProvider = () => {
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

  const setProductPage = (page: number) => {
    dispatch({type: "set-product-page", payload: page})
  }

  const setProductsFromApi = async() => {
    setLoadingProductsToTrue()
    const products = await getProductsFromApi()

    if (products) {
      setProducts(products)
    }
    setLoadingProductsToFalse()
  }

  return {
    state,
    setProductPage,
    setProductsFromApi
  }
}