import { CartProvider } from "./cart/context/CartProvider"
import { ProductProvider } from "./products/context/ProductProvider"
import { RootLayout } from "./shared/layouts/RootLayout"


export const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <RootLayout />
      </CartProvider>
    </ProductProvider>
  )
}
