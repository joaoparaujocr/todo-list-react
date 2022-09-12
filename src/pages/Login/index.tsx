import Button from "../../components/Button";
import { Link, Navigate } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { setUserThunk } from "../../store/modules/userToken/thunks";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {

  const user = useSelector((state:any) => state.user);
  const { register, handleSubmit } = useForm();
  const [passwordIsVisible, setPassWordIsVisible] = useState(false);
  const dispatch = useDispatch();

  const submitForm = (data: any) => {
    dispatch(setUserThunk(data));
  };

  return (
    <>
      {!user ? (
        <Form title="Login" onSubmit={handleSubmit(submitForm)}>
          <Input register={register("email")} placeholder="Email" />
          <div>
            <Input type={passwordIsVisible ? "text" : "password"} register={register("password")} placeholder="Senha" />
            <span onClick={() => setPassWordIsVisible(!passwordIsVisible)}>{passwordIsVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }</span>
          </div>
          <Button title="Login" />
          <Link to="/register">Ainda não possui conta?clique aqui</Link>
        </Form>
      ) : <Navigate to="/home" replace />}
    </>
  )
}

export default Login;