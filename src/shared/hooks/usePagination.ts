import { useState } from "react"

export const usePagination = () => {
  const [page, setPage] = useState(1)

  const nextPage = () => {
    setPage(currentPage => currentPage + 1)
  }
  
  const previousPage = () => {
    if (page === 1) return
    setPage(currentPage => currentPage - 1)
  }

  return {
    page,
    nextPage,
    previousPage
  }
}