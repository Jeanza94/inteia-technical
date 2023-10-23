import { createContext } from "react";
import { Product } from "../interfaces/product";

interface ProductContextProps {
  loadingProducts: boolean,
  productPage: number,
  products: Product[],
  setProductPage: (page: number) => void,
  setProductsFromApi: () => Promise<void>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)