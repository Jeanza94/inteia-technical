import { useState } from "react";
import { Box, Button, Modal } from "@mui/material"
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
      >
        Add product
      </Button>

      <Modal
        open={isOpenFormProduct}
        onClose={onCloseFormProduct}
      >
        <Box>
          <FormProduct />
        </Box>
      </Modal>
    </>
  )
}
