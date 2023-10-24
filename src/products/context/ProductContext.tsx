import { createContext } from "react";
import { Category, Product } from "../interfaces/product";

interface ProductContextProps {
  loadingProducts: boolean,
  productPage: number,
  products: Product[],
  categories: Category[],
  setProductPage: (page: number) => void,
  setProductsAndCategoriesFromApi: () => Promise<void>
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)