import { FC, PropsWithChildren } from "react"
import { ProductContext } from "./ProductContext"
import { useProductProvider } from "../hooks"


export const ProductProvider:FC<PropsWithChildren> = ({children}) => {

  const {setProductsFromApi, state} = useProductProvider()

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
