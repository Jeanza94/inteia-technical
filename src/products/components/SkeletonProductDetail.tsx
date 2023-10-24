import { Grid, Skeleton } from "@mui/material"


export const SkeletonProductDetail = () => {
  return (
    <Grid
      container
      padding={2}
      justifyContent="center"
      alignItems="center"
      gap={2}
      width="100vw"
    >
      <Grid
        item
        xs={12}
        sm={4}
      >
        <Skeleton
          height={400}
          width="100%"
        />

      </Grid>


      <Grid
        item
        xs={12}
        sm={7}
        padding={2}
        container
        flexDirection="column"
        gap={1}
      >
        <Skeleton width="60%" height={40} />
        <Skeleton width="20%" height={30} />
        <Skeleton width="100%" height={60} />

        <Grid container alignItems="center" justifyContent="space-between">
          <Skeleton width="20%" height={30} />
          <Skeleton width="40%" height={40} />
        </Grid>
      </Grid>
    </Grid>
  )
}
