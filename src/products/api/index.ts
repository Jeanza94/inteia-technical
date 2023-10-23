import { Product } from "../interfaces/product"
import axios from 'axios';

const url = "https://api.escuelajs.co/api/v1/products" 

export const getProductsFromApi = async(): Promise<Product[] | undefined> => {
    try {
      const { data:products } = await axios.get<Product[]>(url)
      return products
    } catch (error) {
      console.log(error)
    }
  }