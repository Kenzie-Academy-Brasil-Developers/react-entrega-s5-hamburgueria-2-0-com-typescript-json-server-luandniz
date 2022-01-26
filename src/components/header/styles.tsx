import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  border-radius: 0px 0px 30px 30px;

  @media (min-width: 545px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 10px 50px 30px;
  }
`;

export const TextContent = styled.div`
  margin: 15px 0 15px 15px;

  h3 {
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 700;
    :hover {
      color: var(--gray);
      transition: 1s;
    }
  }
`;

export const SearchContent = styled.div`
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  width: 80%;

  input {
    border: none;
    outline: none;
    background: none;
    font-size: 18px;
    color: var(--gray);
    padding: 20px 10px 20px 5px;
    margin-left: 10px;
  }

  @media (min-width: 545px) {
    width: 300px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  margin: 15px 0 15px 0;
  cursor: pointer;

  @media (min-width: 545px) {
    margin-right: 80px;
  }
  svg {
    font-size: 27px;
    color: var(--white);

    :hover {
      color: var(--gray);
      transition: 0.5;
    }
  }
`;
