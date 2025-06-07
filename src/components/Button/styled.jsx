import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;

  color: rgba(255, 255, 255, 1);

  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;

  transition: background-color 300ms ease-out, box-shadow 300ms ease-out,
    opacity 300ms ease-out;

  &:hover {
    background-color: #b0552f;
    opacity: 0.95;
    box-shadow: 0 4px 16px rgba(204, 98, 55, 0.15);
  }
`;
