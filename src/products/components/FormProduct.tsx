import { Button, Grid, IconButton, MenuItem, Select, TextField } from "@mui/material"
import { useFromProduct } from "../hooks"
import { AddAPhoto, HighlightOff, Save } from "@mui/icons-material"
import { CategoryName } from "../interfaces/product"

export const FormProduct = () => {

  const {
    getErrorMessage, images,
    appendImage, handleSubmit, isErrorInField, onSubmit, register, removeImage
  } = useFromProduct()

  return (
    <Grid
      component="form"
      container
      bgcolor="white"
      height={500}
      width={400}
      position="absolute"
      top="50%"
      left="50%"
      sx={{ transform: "translate(-50%, -50%)", overflowY: "auto" }}
      flexDirection="column"
      padding={2}
      gap={2}
      borderRadius={3}
      onSubmit={handleSubmit(onSubmit)}
    >

      <TextField
        error={isErrorInField({field: "title"})}
        variant="outlined"
        label="Product name"
        size="small"
        {
        ...register("title", {
          required: { value: true, message: "Required Field" },
          minLength: { value: 3, message: "Requires at least 3 characters" }
        })
        }
        helperText={getErrorMessage({field: "title"})}
      />

      <Select
        size="small"
        defaultValue={CategoryName.Clothes}
        inputProps={
          {
            ...register("category")
          }
        }
      >
        <MenuItem value={CategoryName.Clothes}>{CategoryName.Clothes}</MenuItem>
        <MenuItem value={CategoryName.Electronics}>{CategoryName.Electronics}</MenuItem>
        <MenuItem value={CategoryName.Furniture}>{CategoryName.Furniture}</MenuItem>
        <MenuItem value={CategoryName.Others}>{CategoryName.Others}</MenuItem>
        <MenuItem value={CategoryName.Shoes}>{CategoryName.Shoes}</MenuItem>
      </Select>
      
      <TextField
        error={isErrorInField({field:"description"})}
        variant="outlined"
        label="Description"
        multiline
        rows={3}
        size="small"
        {
        ...register("description", {
          required: { value: true, message: "Required Field" },
          minLength: { value: 3, message: "Requires at least 3 characters" }
        })
        }
        helperText={getErrorMessage({field: "description"})}
      />

      <TextField
        error={isErrorInField({field: "price"})}
        variant="outlined"
        label="Price ($)"
        type="number"
        size="small"
        {
          ...register("price", {
            required: { value: true, message: "Required Field" },
            validate: (value) => {
              if (value < 1) return "Not allowed prices lower than 1 dollar"
              return true
            }
          })
        }
        helperText={getErrorMessage({field: "price"})}
      />

      {
        images.map((image, index) => (
          <Grid
            position="relative"
            container
            flexDirection="column"
            mt={1}
            key={image.id}
          >
            <TextField
              error={isErrorInField({field: "images", indexImage: index})}
              variant="outlined"
              label={`Image ${index + 1}`}
              size="small"
              {
                ...register(`images.${index}.url`, {
                  required: { value: true, message: "Required Field" },
                  pattern: {value: /^https:\/\//, message: "Must start with https://"}
                })
              }
              helperText={getErrorMessage({field: "images", indexImage: index})}
            />
            <IconButton
              sx={{ position: "absolute", top: -20, right: -12 }}
              size="small"
              color="error"
              onClick={() => removeImage(index)}
              title={`Delete image ${index + 1}`}
            >
              <HighlightOff sx={{ fontSize: 16 }} />
            </IconButton>

          </Grid>
        ))
      }
      <IconButton
        onClick={appendImage}
        title="Add new image"
      >
        <AddAPhoto color="primary" fontSize="small" />
      </IconButton>

      <Button
        variant="contained"
        color="primary"
        startIcon={<Save />}
        sx={{ textTransform: "none" }}
        type="submit"
      >
        Save product
      </Button>
    </Grid>
  )
}
