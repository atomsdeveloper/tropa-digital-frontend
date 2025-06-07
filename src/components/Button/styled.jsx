import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;

  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 33px;

  transition: background-color 300ms ease-out, box-shadow 300ms ease-out,
    opacity 300ms ease-out;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 16px rgba(204, 98, 55, 0.15);
  }
`;
