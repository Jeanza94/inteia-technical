import { createContext } from "react";
import { Product } from "../../products/interfaces/product";

export interface ProductInCart extends Product {
  total: number
}

interface CartContextProps {
  productsInCart: ProductInCart[],
  totalProductsInCart: number,
  addProductToCart: (product: Product, count?: number) => void,
  addProductInCartByCount: (productId: number, count?: number) => void,
  deleteProductInCart: (productId: number) => void,
  substractProductByCount: (productId: number, count?: number) => void
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)