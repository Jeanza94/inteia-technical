import { FC } from 'react';
import { Box, Button, CircularProgress, Grid, IconButton, MenuItem, Select, TextField } from "@mui/material"
import { useFromProduct } from "../hooks"
import { AddAPhoto, HighlightOff, Save } from "@mui/icons-material"

interface Props {
  onCloseFormProduct: () => void 
}

export const FormProduct:FC<Props> = ({onCloseFormProduct}) => {

  const {
    categories, isSubmitting, images, appendImage,
    getErrorMessage, handleSubmit, isErrorInField, onSubmit, register, removeImage
  } = useFromProduct({onCloseFormProduct})

  return (
    <Box
      component="form"
      bgcolor="white"
      width={320}
      height={500}
      sx={{
        overflowY: "auto", 
        display: "flex", 
      }}
      flexDirection="column"
      padding={2}
      gap={2}
      borderRadius={3}
      onSubmit={handleSubmit(onSubmit)}
    >

      <TextField
        error={isErrorInField({ field: "title" })}
        variant="outlined"
        label="Product name"
        size="small"
        {
        ...register("title", {
          required: { value: true, message: "Required Field" },
          minLength: { value: 3, message: "Requires at least 3 characters" }
        })
        }
        helperText={getErrorMessage({ field: "title" })}
      />

      {
        categories.length > 0
          ? (
            <Select
              size="small"
              defaultValue={categories[0].id}
              inputProps={
                {
                  ...register("categoryId")
                }
              }
            >
              {
                categories.map(category => (
                  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                ))
              }
            </Select>
          )
          : null
      }

      <TextField
        error={isErrorInField({ field: "description" })}
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
        helperText={getErrorMessage({ field: "description" })}
      />

      <TextField
        error={isErrorInField({ field: "price" })}
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
        helperText={getErrorMessage({ field: "price" })}
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
              error={isErrorInField({ field: "images", indexImage: index })}
              variant="outlined"
              label={`Image ${index + 1}`}
              size="small"
              {
              ...register(`images.${index}.url`, {
                required: { value: true, message: "Required Field" },
                pattern: {
                  value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                  message: "Not valir URL"
                }
              })
              }
              helperText={getErrorMessage({ field: "images", indexImage: index })}
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

      {
        isSubmitting
          ? <CircularProgress size={20} sx={{alignSelf: "center"}} />
          : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
              sx={{ textTransform: "none" }}
              type="submit"
              title="Create new product"
            >
              Save product
            </Button>
          )
      }

    </Box>
  )
}
