import { ProductProvider } from "./products/context/ProductProvider"
import { RootLayout } from "./shared/layouts/RootLayout"


export const App = () => {
  return (
    <ProductProvider>
      <RootLayout />
    </ProductProvider>
  )
}
