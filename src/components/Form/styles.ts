import styled from "styled-components";

const FormStyle = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;

  h1 {
    color: black;
  }

  a {
    text-decoration: none;
    color: black;
    margin-top: 25px;

    &:hover {
      color: gray;
      text-decoration: underline;
    }
  }
`;

export default FormStyle;