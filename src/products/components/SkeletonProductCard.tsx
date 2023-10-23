import { Box, Skeleton } from "@mui/material"


export const SkeletonProductCard = () => {
  return (
    <Box 
      height={320}
      width={200}
      p={2} 
    >
      <Skeleton 
        width="100%"
        height={40}
      />
      <Skeleton 
        width={100}
        height={30}
      />

      <Skeleton 
        width="100%"
        height="100%"
      />

    </Box>
  )
}
