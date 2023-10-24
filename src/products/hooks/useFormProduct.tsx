import { useForm, useFieldArray, SubmitHandler } from "react-hook-form"

interface FormData {
  category: string,
  productName: string,
  description: string,
  price: number,
  images: {url: string}[]
}

type Value =
  | {field: "productName" | "description" | "price"}
  | {field: "images", indexImage: number}

export const useFromProduct = () => {

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

  const onSubmit:SubmitHandler<FormData> = (data) => {
    console.log({data})
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