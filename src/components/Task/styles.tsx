import styled from "styled-components";
import checkedImg from "../../assets/checked.png";

const ItemTask = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #878787;
  border-radius: 8px;
  margin: 20px 0;

  .boxMain {
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;

    input {
      visibility: hidden;

      + label::before{
        cursor: pointer;
        content: "";
        width: 24px;
        height: 22px;
        border: 1px solid #ADB5BD;
        border-radius: 4px;
        vertical-align: middle;
        display: inline-block;
        z-index: 99;
        margin-right: 20%;
        background-color: white;
      }

      &:checked + label::before {
        background-image: url(${checkedImg});
        background-position: center;
        background-size: 90%;
        background-repeat: no-repeat;
      }
    }

    p {
      margin-left: 20px;
    }
  }

  .boxController {
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;

    svg {
      cursor: pointer;
      font-size: 20px;

      &:first-child {
        margin-right: 20px;
      }
    }
  }
`

export default ItemTask