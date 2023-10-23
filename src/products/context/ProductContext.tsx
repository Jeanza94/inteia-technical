import { createContext } from "react";
import { Product } from "../interfaces/product";

interface ProductContextProps {
  loadingProducts: boolean,
  page: number,
  products: Product[],

  nextPage: () => void,
  previousPage: () => void,
  setProductsFromApi: () => Promise<void>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)