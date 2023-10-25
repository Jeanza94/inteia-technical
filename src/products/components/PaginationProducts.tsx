import { ChangeEvent, SyntheticEvent, useContext, useMemo } from "react"
import { Pagination, Stack } from "@mui/material"
import { ProductContext } from "../context/ProductContext"


export const PaginationProducts = () => {
  
  const { products, setProductPage} = useContext(ProductContext)
  
  const totalPages = useMemo(() => {
    return Math.ceil(products.length / 20)
  }, [products])

  const handlePagination = (event: ChangeEvent<unknown>, value:number) => {
    setProductPage(value)
  } 

  return (
    <Stack spacing={2}>
      <Pagination 
        color="secondary" 
        count={totalPages} 
        showFirstButton 
        showLastButton
        onChange={handlePagination}
      />
    </Stack>
  )
}
