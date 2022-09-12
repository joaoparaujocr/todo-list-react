import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form"
import InputStyle from "./styles"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  register ?: UseFormRegisterReturn;
}

const Input = ({ register, ...rest }:IInput) => {

  return (
    <InputStyle {...register} {...rest}/>
  )
}

export default Input