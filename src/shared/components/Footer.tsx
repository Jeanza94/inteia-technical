
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { footerData } from '../raw-data/footerData';

export const Footer = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      component="footer"
      height={64}
      bgcolor={theme.palette.primary.main}
      justifyContent="center"
      alignItems="center"
    >
      {
        footerData.map(({Icon, label, text, url }) => (
          <Grid
            container
            item
            sm={3}
            xs={12}
            gap={1}
            key={label}
            justifyContent="center"
            alignItems="center"
            component="a"
            href={url}
            target="_blank"
          >
            <Icon color="secondary" />
            <Typography
              component="span"
              color={theme.palette.primary.contrastText}
              fontSize={12}
            >
              {text}
            </Typography>
          </Grid>

        ))
      }

      
    </Grid>
  )
}
