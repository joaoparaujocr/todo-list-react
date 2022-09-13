import { Dispatch, SetStateAction } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useMutation, useQueryClient } from 'react-query';
import { ITaskSelect } from '../../pages/Home';
import { checkedTask, deleteTask, uncheckedTask } from '../../services/api';
import ItemTask from './styles';

export interface ITask {
  content: string;
  complete: boolean;
  id: number;
  setVisibleModalEdit: Dispatch<SetStateAction<boolean>>;
  setTaskSelect : Dispatch<SetStateAction<ITaskSelect>>;
}

const Task = ({ content, complete, id, setVisibleModalEdit, setTaskSelect }: ITask) => {
  const queryClient = useQueryClient();
  const { mutate: mutateDelete } = useMutation(() => deleteTask(id), {
    onSuccess: () => queryClient.invalidateQueries("tasks")
  });

  const { mutate: mutateChecked } = useMutation(() => checkedTask(id), {
    onSuccess: () => queryClient.invalidateQueries("tasks")
  });
  
  const { mutate: mutateUnchecked } = useMutation(() => uncheckedTask(id), {
    onSuccess: () => queryClient.invalidateQueries("tasks")
  });

  return (
    <ItemTask>
      <div className='boxMain'>
        <input type="checkbox" name="task" id={String(id)} defaultChecked={complete}/>
        <label onClick={() => complete ? mutateUnchecked() : mutateChecked()} htmlFor={String(id)}></label>
        <p>{content}</p>
      </div>
      <div className="boxController">
        <FiTrash onClick={() => mutateDelete()} />
        <FiEdit onClick={() => {
          setVisibleModalEdit(true);
          setTaskSelect({ content, id })
        }}/>
      </div>
    </ItemTask>
  )
}

export default Task