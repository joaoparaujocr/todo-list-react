import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { setUserThunkRegister } from "../../store/modules/userToken/thunks";

const Register = () => {

  const { user } = useSelector((state:any) => state)
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data: any) => {
    dispatch(setUserThunkRegister(data));
  }

  return (
    <>
      {!user ? (
        <Form title="Registrar" onSubmit={handleSubmit(submitForm)}>
          <Input register={register("name")} placeholder="Nome" />
          <Input register={register("email")} placeholder="Email" />
          <Input type="password" register={register("password")} placeholder="Senha" />
          <Input type="password" register={register("checkPassword")} placeholder="Confirmar senha" />
          <Button title="Registrar" />
          <Link to="/">Já possui conta? clique aqui</Link>
        </Form>
      ) : <Navigate to="/home" replace />}
    </>
  )
}

export default Register;
