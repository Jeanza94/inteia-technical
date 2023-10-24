
import Swal from "sweetalert2"

type Icon = "info" | "question" | "success" | "error" | "warning" 

interface PropsGetPopUpInfo {
  title: string,
  text: string,
  icon: Icon,
  confirmButtonText: string,
}

interface PropsGetPopUpConfirmedAnswer extends Omit<PropsGetPopUpInfo, "icon"> {
  cancelButtonText: string
}

export const getPopUpConfirmedAnswer = async({
  cancelButtonText, confirmButtonText, text, title
}: PropsGetPopUpConfirmedAnswer) => {
  const { isConfirmed } = await Swal.fire({
    title,
    icon: 'question',
    text,
    confirmButtonText,
    showCancelButton: true,
    cancelButtonText,
    confirmButtonColor: "#152158",
    cancelButtonColor: "#dc2626",
    iconColor: "#152158",
    color: "#152158"
  })
  return isConfirmed
}

export const getPopUpInfo = async({
  confirmButtonText, icon, text, title
}: PropsGetPopUpInfo) => {
  await Swal.fire({
    icon,
    confirmButtonText,
    text,
    title,
    confirmButtonColor: "#d97706",
    iconColor: icon === "error" ? "#dc2626" : "#713f12",
    color: icon === "error" ? "#7f1d1d" : "#713f12"
  })
}