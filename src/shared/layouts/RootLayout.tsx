import {Outlet} from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { NavBar, Footer } from "../components"
import { lightTheme } from "../../themes/lightTheme"

export const RootLayout = () => {
  
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
