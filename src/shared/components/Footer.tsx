import { Box, Typography } from '@mui/material';
import {useTheme} from '@mui/material/styles'

export const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      height={64}
      bgcolor={theme.palette.primary.main}
    >
      <Typography 
        component="p"
        color={theme.palette.primary.contrastText}
      >
        hola
      </Typography>
    </Box>
  )
}
