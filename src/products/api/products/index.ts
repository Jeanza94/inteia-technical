import { RequestProduct } from "../../interfaces/api"
import { Product } from "../../interfaces/product"
import { escuelaJsApi } from "../config"

export const getProductsFromApi = async (): Promise<Product[] | undefined> => {
  try {
    const { data: products } = await escuelaJsApi.get<Product[]>("/products")
    return products
  } catch (error) {
    console.log(error)
  }
}

export const postProductToApi = async (product: RequestProduct) => {

  try {
    const { data } = await escuelaJsApi.post<Product>("/products", product)
    return data
  } catch (error) {
    console.log(error)
  }
}

// export const deleteProductById = async(productId:number) => {
//   try {
//     const {data} = await 
//   } catch (error) {
    
//   }
// }