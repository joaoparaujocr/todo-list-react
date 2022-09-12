import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  max-width: 300px;
  margin-top: 18px;
  border-radius: 5px;
  padding-left: 7px;
  font-size: 18px;
  outline: none;
  border: none;
  line-height: 40px;

  ~ div {
    max-width: 300px;
    width: 100%;
    display: inline;
    position: relative;
    text-align: center;
    
    span {
      position: absolute;
      right: 7px;
      top: 27px;
      font-size: 20px;
      color: white;
      cursor: pointer;
    }
  }

`

export default InputStyle;