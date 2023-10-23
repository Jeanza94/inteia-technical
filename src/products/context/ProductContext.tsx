import { createContext } from "react";

interface ProductContextProps {
  
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)