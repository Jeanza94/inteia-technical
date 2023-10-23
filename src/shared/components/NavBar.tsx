import { AppBar, Toolbar, Typography } from "@mui/material"


export const NavBar = () => {
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar component="nav">
        <Typography component="h5" variant="h5">Productos</Typography>
      </Toolbar>
    </AppBar>
  )
}
