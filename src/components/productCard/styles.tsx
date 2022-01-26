import styled from "styled-components";

export const BoxContent = styled.div`
  width: 200px;
  height: 381px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
`;

export const BoxImage = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const BoxInfo = styled.div`
  margin: 5px 0 0 5px;
  width: 75%;
  h3 {
    letter-spacing: 2px;
    height: 35px;
  }
  p {
    margin: 7px 0 7px 0;
    font-size: 0.9rem;
  }
  button {
    margin-top: 5px;
  }
`;
