

import { useReducer } from "react"
import { productReducer } from "../context/productReducer"
import { Category, Product } from "../interfaces/product"
import { getProductsFromApi } from "../api/products"
import { getCategories } from "../api/categories"

export interface ProductState {
  loadingProducts: boolean,
  productPage: number,
  products: Product[],
  categories:Category[]
}

const initailState: ProductState = {
  loadingProducts: false,
  productPage: 1,
  products: [],
  categories: []
}

export const useProductProvider = () => {
  const [state, dispatch] = useReducer(productReducer, initailState)

  const setProducts = (products: Product[]) => {
    dispatch({type: "set-products", payload: products})
  }

  const setCategories = (categories: Category[]) => {
    dispatch({type: "set-categories", payload: categories})
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

  const setProductsAndCategoriesFromApi = async() => {
    setLoadingProductsToTrue()
    
    const [products, categories] = await Promise.all([
      getProductsFromApi(),
      getCategories()
    ])

    if (products) {
      setProducts(products)
    }

    if (categories) {
      setCategories(categories)
    }

    setLoadingProductsToFalse()
  }

  return {
    state,
    setProductPage,
    setProductsAndCategoriesFromApi
  }
}