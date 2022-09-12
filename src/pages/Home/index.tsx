import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { getTasks } from "../../services/api";
import { logoutUser } from "../../store/modules/userToken/thunks";
import { Header } from "./style";

const Home = () => {
  const { error, data, isLoading } = useQuery("tasks", getTasks);
  const user = useSelector((state:any) => state.user);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const logout = () => {
    queryClient.removeQueries("taks", {exact: true});
    localStorage.clear();
    dispatch(logoutUser());
    navigate("", { replace: true });
  }

  return (
    <>
      {user ? (
        <Header>
          <h2>Sua lista de tarefas {user.user.name}</h2>
          <Button title="Sair" onClick={logout} />
        </Header>
      ): <Navigate to='/' replace/>}

    </>
  )
}

export default Home;
