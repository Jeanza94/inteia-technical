import { Block } from "@mui/icons-material"
import { Grid, Typography, useTheme } from "@mui/material"

export const NoProductCard = () => {
  const theme = useTheme()
  return (
    <Grid
      p={2}
      gap={1}
      height={150}
      container 
      bgcolor={theme.palette.primary.main}
      borderRadius={2}
      alignItems="center"
      justifyContent="center"
    >
      <Block fontSize="large" color="secondary"/>
      <Typography
        component="span"
        variant="h5"
        color="white"
      >
        The product was not founded
      </Typography>
    </Grid>
  )
}
