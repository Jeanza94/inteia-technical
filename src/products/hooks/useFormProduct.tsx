import { useForm, useFieldArray, SubmitHandler } from "react-hook-form"
import { RequestProduct } from "../interfaces/api"
import { useContext, useState } from 'react';
import { ProductContext } from "../context/ProductContext";
import { postProductToApi } from "../api/products";

interface Props {
  onCloseFormProduct : () => void
}

interface FormData {
  categoryId: number,
  title: string,
  description: string,
  price: number,
  images: {url: string}[]
}

type Value =
  | {field: "title" | "description" | "price"}
  | {field: "images", indexImage: number}

export const useFromProduct = ({onCloseFormProduct}: Props) => {

  const { categories, addProduct } = useContext(ProductContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {register, handleSubmit, formState: {errors}, control} = useForm<FormData>({
    defaultValues: {
      images: [{url: ""}],
    }
  })

  const {fields: images, append: append, remove} = useFieldArray({
    control,
    name:"images"
  })

  const appendImage = () => {
    append({url: ""})
  }
  
  const removeImage = (index: number) => {
    if (images.length === 1) return
    remove(index)
  }

  const onSubmit:SubmitHandler<FormData> = async(data) => {

    setIsSubmitting(true)
    const newProduct: RequestProduct = {
      ...data,
      images: data.images.map(image => image.url)
    }
    
    const product = await postProductToApi(newProduct)
    
    if (product) {
      addProduct(product)
    }
    setIsSubmitting(false)
    onCloseFormProduct()
  }

  const isErrorInField = (value: Value) => {
    
    if (value.field === "images") {
      if (errors.images && errors.images[value.indexImage]) return true
      return false
    }

    if (errors[value.field]) return true
    return false
  }

  const getErrorMessage = (value: Value) => {
    if (value.field === "images") {
      if (errors.images && errors.images[value.indexImage] ) return errors.images[value.indexImage]!.url!.message
    }

    if (errors[value.field]) return errors[value.field]!.message
  }

  return {
    categories,
    isSubmitting,
    images,
    appendImage,
    getErrorMessage,
    handleSubmit,
    isErrorInField,
    onSubmit,
    removeImage,
    register,
  }
}