import { Link } from "react-router-dom"
import { Grid, Typography, useTheme } from "@mui/material"

export const ErrorPage = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >

      <Typography
        component="span"
        variant="h4"
        sx={{ color: theme.palette.primary.dark }}
        fontWeight="bold"
      >
        404 | The page was not founded
      </Typography>
      <Link to="/">
        <Typography
          component="span"
          variant="h5"
          sx={{ color: theme.palette.primary.main }}
        >
          Go home
        </Typography>
      </Link>
    </Grid>
  )
}
