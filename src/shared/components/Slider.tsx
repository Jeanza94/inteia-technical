import { FC, useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material"

interface Props {
  images: string[]
}

export const Slider: FC<Props> = ({ images }) => {

  const [currentIndexImage, setCurrentIndexImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 6000)
    return () => {
      clearInterval(interval)
    }
  }, [])

 

  const nextImage = () => {

    setCurrentIndexImage(prev => {
      if (prev === images.length - 1) return 0
      return prev + 1
    })
  }

  const setImage = (index: number) => {
    setCurrentIndexImage(index)
  }

  return (
    <Box
      position="relative"
      width="100%"
    >
      <Grid
        component="img"
        width="100%"
        height={400}
        className="image-banner"
        src={images[currentIndexImage]}
        alt={`Image ${currentIndexImage + 1} from slider`}
      />
      {
        images.length > 1
          ? (
            <Grid
              container
              gap={2}
              p={1}
              width={300}
              flexWrap="wrap"
              position="absolute"
              bottom={12}
              left="calc((100vw - 300px) / 2)"
              justifyContent="center"
            >
              {
                images.map((_image, index) => (
                  <button 
                    className={`button-slider ${index === currentIndexImage ? "button-slider-active" : ""}`}
                    key={index}
                    onClick={() => setImage(index)}
                  />
                ))
              }
            </Grid>
          )
          : null
      }
    </Box>
  )
}
