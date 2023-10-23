import { FC, PropsWithChildren } from "react"
import { ProductContext } from "./ProductContext"
import { useProductProvider } from "../hooks"


export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const {
    page, state,
    nextPage, previousPage, setProductsFromApi
  } = useProductProvider()

  return (
    <ProductContext.Provider
      value={{
        page,
        ...state,
        nextPage,
        previousPage,
        setProductsFromApi
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
