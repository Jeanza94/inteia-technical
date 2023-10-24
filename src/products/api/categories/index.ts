import { Category } from "../../interfaces/product"
import { escuelaJsApi } from "../config"


export const getCategories = async() => {
  try {
    const {data} = await escuelaJsApi.get<Category[]>("/categories")
    return data
  } catch (error) {
    console.log(error)
  }
}