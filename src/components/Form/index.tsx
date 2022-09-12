import { FormEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import FormStyle from "./styles";

interface IForm {
  children: ReactNode;
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>
}

const Form = ({ children, title, onSubmit }: IForm) => {

  return (
    <>
      <FormStyle onSubmit={onSubmit}>
        <h1>{title}</h1>
        {children}
      </FormStyle>
    </>

  )
}

export default Form;