import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  padding: 0 4%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerMain = styled.main`
  max-width: 1200px;
  width: 100%;
  padding: 0 4%;
  margin: 20px auto 0 auto;

  button {
    cursor: pointer;
    padding: 10px 8px;
    margin-bottom: 10px;
    border-radius: 8px;
    font-size: 20px;
    border: none;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
    width: 100%;
  }
`