import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 750px;
  padding: 60px 35px 35px 35px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h3 {
    text-align: center;
    font-size: 28px;
    margin: 24px 0 24px 0;
    letter-spacing: 3px;
  }

  img {
    width: 100px;
    heigth: 100px;

    margin: 0 auto;
    border-radius: 50%;
    box-shadow:0px 15px 10px rgba(0,0,0,0.15);
    );
  }
`;

export const Text = styled.p`
  margin: 20px 0 10px 0;
  text-align: center;
  font-size: 13px;
`;
