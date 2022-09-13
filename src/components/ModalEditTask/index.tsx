import { Dispatch, SetStateAction, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from "react-modal";
import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../../services/api";
import ModalStyleGlobal from "./styles";

Modal.setAppElement("#root");

interface IModalEditTask {
  isOpen: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  taskSelect: {
    content: string;
    id: number
  };
}

const ModalEditTask = ({ isOpen, setVisible, taskSelect }: IModalEditTask) => {
  const [updateContent, setUpdateContent] = useState(taskSelect.content);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => updateTask(taskSelect.id, updateContent), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks")
      closeModal()
    }
  })


  const closeModal = () => setVisible(false);

  return (
    <>
      <ModalStyleGlobal />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <header>
          <h3>Editar Tarefa</h3>
          <FaRegWindowClose onClick={closeModal} />
        </header>
        <form action="" onSubmit={e => {
          e.preventDefault();
          mutate();
        }}>
          <textarea onChange={e => setUpdateContent(e.target.value)} name="content" placeholder="Jogar o Lixo">{taskSelect.content}</textarea>
          <button type="submit">Editar Tarefa</button>
        </form>
      </Modal>
    </>
  )
}

export default ModalEditTask;