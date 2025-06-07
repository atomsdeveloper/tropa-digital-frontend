import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 10px;

  border: none;
  background-color: ${($bg) => ($bg ? "#f3f3f3" : "transparent")};

  border-radius: 30px;
  font-size: 14px;

  color: #333;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a7a7a7;
    font-weight: 400;
  }
`;
