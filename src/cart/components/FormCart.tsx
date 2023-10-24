import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useFormCart } from "../hooks"
import { Add } from "@mui/icons-material"


export const FormCart = () => {

  const {
    errors, products,
    handleSubmit, onSubmit, register
  } = useFormCart()

  return (
    <Box
      component="form"
      width={280}
      gap={2}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display:"flex"  
      }}
      flexDirection="column"
      boxShadow="0px 0px 2px 2px grey"
      p={2}
      borderRadius={2}
    >
      <Typography component="h3" variant="body1">Select your product</Typography>
      {
        products.length > 0 
          ? (
            <Select
              size="small"
              defaultValue={products[0].id}
              inputProps={
                {
                  ...register("id")
                }
              }
            >
              {
                products.map(product => (
                  <MenuItem key={product.id} value={product.id}>{product.title} - {product.id}</MenuItem>
                ))
              }
            </Select>
          )
          : null
      }
      <TextField
        error={errors.quantity ? true : false}
        type="number"
        label="Quantity"
        size="small"
        {
          ...register("quantity", {
            required: {value:true, message:"Field Required"},
            validate: (value) => {
              if (+value < 1) return "Not allowed numbers lower than one"
              return true
            } 
          })
        }
        helperText={errors.quantity?.message}
      />
      <Button
        startIcon={<Add fontSize="small"/>}
        variant="contained"
        color="primary"
        sx={{textTransform:"none"}}
        type="submit"
      >
        Add product
      </Button>
    </Box>
  )
}
