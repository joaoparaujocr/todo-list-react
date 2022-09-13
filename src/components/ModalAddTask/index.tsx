import Modal from "react-modal";
import ModalStyleGlobal from "./styles";
import { FaRegWindowClose } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";
import { createTask } from "../../services/api";
import { useMutation, useQueryClient } from "react-query";

Modal.setAppElement("#root");

interface IModalAddTask {
  isOpen: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>
}

const ModalAddTask = ({ isOpen, setVisible }: IModalAddTask) =>{
  const queryClient = useQueryClient()
  const [value, setValue] = useState("");

  const closeModal = () => setVisible(false);

  const { mutate } = useMutation(() => createTask(value), {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      closeModal();
    }
  })

  return  (
    <>
      <ModalStyleGlobal />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <header>
          <h3>Adicionar Tarefa</h3>
          <FaRegWindowClose onClick={closeModal} />
        </header>
        <form action="" onSubmit={e => {
          e.preventDefault();
          mutate()
        }}>
          <textarea onChange={e => setValue(e.target.value)} name="content" placeholder="Jogar o Lixo"></textarea>
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </Modal>
    </>
  )
}

export default ModalAddTask