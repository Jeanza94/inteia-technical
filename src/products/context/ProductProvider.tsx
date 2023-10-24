import { FC, PropsWithChildren } from "react"
import { ProductContext } from "./ProductContext"
import { useProductProvider } from "../hooks"


export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const {
    state,
    addProduct,
    setProductPage,
    setProductsAndCategoriesFromApi,
  } = useProductProvider()

  return (
    <ProductContext.Provider
      value={{
        ...state,
        addProduct,
        setProductPage,
        setProductsAndCategoriesFromApi
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
