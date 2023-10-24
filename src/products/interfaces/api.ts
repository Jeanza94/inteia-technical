

export interface RequestProduct {
  title: string,
  price: number,
  description: string,
  categoryId: number,
  images: string[]
}


export type ResponseDeleteProduct = 
| true
| ResponseErrorDeleteProduct


interface ResponseErrorDeleteProduct {
  path: string,
  timestamp: string,
  name: string,
  message:  string
}