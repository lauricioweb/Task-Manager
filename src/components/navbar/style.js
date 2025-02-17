import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  background-color:rgb(0, 0, 0);
  border-bottom: 1px solid rgba(0, 75, 107, 0.64);
  padding: 10px 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 1000;
  button {
    margin-left: 30px;
  }
  p {
    color: #33a4d4;

    span {
      color: white;
      text-transform: capitalize;
    }
  }
`;
