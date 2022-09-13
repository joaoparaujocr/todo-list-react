import { createGlobalStyle } from "styled-components";

const ModalStyleGlobal = createGlobalStyle`
  .Modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    padding: 10px;
    width: 100%;
    border: 1px solid white;
    background-color: black;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      svg {
        font-size: 20px;
        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      textarea {
        resize: none;
        margin-top: 10px;
        padding-left: 7px;
        padding-top: 5px;
        font-size: 17px;
        border: none;
      }

      button {
        margin-top: 10px;
        padding: 10px 5px;
        cursor: pointer;
        font-size: 16px;
      }
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.512)
  }
`
export default ModalStyleGlobal;