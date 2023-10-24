import { useState } from "react";
import { Button, Grid, Modal } from "@mui/material"
import { Add } from '@mui/icons-material';
import { FormProduct } from "./FormProduct";

export const ButtonProductForm = () => {
  const [isOpenFormProduct, setIsOpenFormProduct] = useState(false)


  const onOpenFormProduct = () => {
    setIsOpenFormProduct(true)
  }

  const onCloseFormProduct = () => {
    setIsOpenFormProduct(false)
  }
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        sx={{ textTransform: "none" }}
        onClick={onOpenFormProduct}
        title="Open Form Product"
      >
        Create product
      </Button>

      <Modal
        open={isOpenFormProduct}
        onClose={onCloseFormProduct}
      >
        <Grid
          position="absolute"
          top="50%"
          left="50%"
          sx={{transform: "translate(-50%, -50%)"}}
        >
          <FormProduct onCloseFormProduct={onCloseFormProduct} />
        </Grid>
      </Modal>
    </>
  )
}
