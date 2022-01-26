import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  animation: 1.5s ${fadeIn} ease-out;

  @media (min-width: 960px) {
    max-width: 1180px;
    margin: 30px auto;
  }
`;
