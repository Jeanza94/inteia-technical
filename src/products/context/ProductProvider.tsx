import { FC, PropsWithChildren } from "react"
import { ProductContext } from "./ProductContext"
import { useProductProvider } from "../hooks"


export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const {
    state,
    setProductPage,
     setProductsFromApi,
  } = useProductProvider()

  return (
    <ProductContext.Provider
      value={{
        ...state,
        setProductPage,
        setProductsFromApi
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
