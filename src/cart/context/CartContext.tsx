import { createContext } from "react";
import { Product } from "../../products/interfaces/product";

export interface ProductInCart extends Product {
  total: number
}

interface CartContextProps {
  productsInCart: ProductInCart[],
  addProductToCart: (product: Product, count?: number) => void,
  totalProductsInCart: number
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)