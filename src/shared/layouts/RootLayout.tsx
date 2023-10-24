import { useContext, useEffect } from 'react'
import {Outlet} from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { NavBar, Footer } from "../components"
import { lightTheme } from "../../themes/lightTheme"
import { ProductContext } from '../../products/context/ProductContext'

export const RootLayout = () => {
  
  const { setProductsAndCategoriesFromApi } = useContext(ProductContext)

  useEffect(() => {
    setProductsAndCategoriesFromApi()
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <NavBar />
      <Box
        component="main"
        minHeight="calc(100vh - 64px - 64px)"
        pt={8}
      >
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
