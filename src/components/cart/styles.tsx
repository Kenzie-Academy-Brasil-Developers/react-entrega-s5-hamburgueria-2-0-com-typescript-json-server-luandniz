import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  background-color: rgba(112, 112, 112, 0.4);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 67vh;
  width: 40vw;
  max-width: 800px;
  background-color: #e0e0e0;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    border-radius: 8px 8px 0 0;
   
  svg{
      color: var(--gray);
      font-size: 30px;
    }

  Button{
    width: 10%;
    height: 40px;
   
    background-color: var(--lightgray);
    
  }

      div {
        display: flex;
        flex-direction: column;
        background-color: yellow;
      }
    }
  }
`;

export const ModalCardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const TotalPriceContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: var(--offwhite);
  width: 10vw;
  max-width: 300px;
  padding: 10px 15px;
  border-radius: 7px;
  text-align: center;
  color: var(--gray);
  margin: 10px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  p {
    font-weight: 600;
    margin-top: 5px;
  }
`;
