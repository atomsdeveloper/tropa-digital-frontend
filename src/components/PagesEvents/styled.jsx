import styled from "styled-components";

export const Pages = styled.div`
  width: 100%;
  height: 74px;

  border-top: 1px;

  padding-top: 15px;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const PagesContent = styled.div`
  width: auto;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BoxButtonPages = styled.div`
  width: 124px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  border-radius: 33px;

  padding: 10px;

  background-color: ${({ $bg }) =>
    !$bg ? "rgba(245, 245, 245, 1)" : "rgba(204, 98, 55, 1)"};

  button {
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0%;

    color: ${({ $bg }) =>
      $bg ? "rgba(245, 245, 245, 1)" : "rgba(0, 0, 0, 1)"};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const BoxPageValue = styled.div`
  width: 30px;
  height: 30px;

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 10px;

  border-radius: 200px;

  background-color: ${({ $bg }) =>
    !$bg ? "rgba(245, 245, 245, 1)" : " rgba(204, 98, 55, 1)"};

  span {
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0%;

    text-align: center;

    color: ${({ $bg }) =>
      $bg ? "rgba(245, 245, 245, 1)" : "rgba(0, 0, 0, 1)"};
  }
`;
