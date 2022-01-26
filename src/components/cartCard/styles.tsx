import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  justify-content: space-between;
  margin: 10px;
  width: 100px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -5px -8px 8px #ffffff;

  h3 {
    text-align: center;
    margin: 5px 0 5px 0;
  }
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.15);
  }

  Button {
    width: 80%;
    height: 30px;
    margin: 5px;
  }
`;
