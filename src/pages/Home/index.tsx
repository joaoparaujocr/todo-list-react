import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ModalAddTask from "../../components/ModalAddTask";
import Task from "../../components/Task";
import { getTasks } from "../../services/api";
import { logoutUser } from "../../store/modules/userToken/thunks";
import { ContainerMain, Header } from "./style";
import { ITask } from "../../components/Task";
import { useState } from "react";
import ModalEditTask from "../../components/ModalEditTask";

export interface ITaskSelect {
  content: string,
  id: number
}

const Home = () => {
  const { data } = useQuery("tasks", getTasks);
  const user = useSelector((state:any) => state.user);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isVisibleModalCreate, setVisibleModalCreate] = useState(false);
  const [isVisibleModalEdit, setVisibleModalEdit] = useState(false);
  const [taskSelect, setTaskSelect] = useState<ITaskSelect>({} as ITaskSelect);
  const dispatch = useDispatch();

  const logout = () => {
    queryClient.removeQueries("taks", {exact: true});
    localStorage.clear();
    dispatch(logoutUser());
    navigate("", { replace: true });
  }

  console.log(data)

  return (
    <>
      {user ? (
        <>
          <Header>
            <h2>Sua lista de tarefas {user.user.name}</h2>
            <Button title="Sair" onClick={logout} />
          </Header>

          <ContainerMain>
            <button onClick={() => setVisibleModalCreate(true)}>Adicionar Tarefa</button>
            <ul>
              {data?.map(({ content, complete, id }: ITask) => {
                return (
                  <Task setTaskSelect={setTaskSelect} setVisibleModalEdit={setVisibleModalEdit} key={id} content={content} complete={complete} id={id} />
                )
              })}
            </ul>
          </ContainerMain>

          <ModalAddTask isOpen={isVisibleModalCreate} setVisible={setVisibleModalCreate}/>
          <ModalEditTask taskSelect={taskSelect} isOpen={isVisibleModalEdit} setVisible={setVisibleModalEdit} />
        </>

      ): <Navigate to='/' replace/>}

    </>
  )
}

export default Home;
