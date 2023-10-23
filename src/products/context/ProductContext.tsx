import { createContext } from "react";
import { Product } from "../interfaces/product";

interface ProductContextProps {
  loadingProducts: boolean,
  products: Product[],

  setProductsFromApi: () => Promise<void>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)