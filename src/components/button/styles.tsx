import styled from "styled-components";

export const ButtonContainer = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  background: var(--lightblue);
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: 0.5s;

  :hover {
    filter: brightness(1.1);
  }

  :active {
    background: var(--lightblue);
  }
`;
