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

  button {
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0%;
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

  span {
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0%;

    text-align: center;
  }
`;
