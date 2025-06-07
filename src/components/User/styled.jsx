import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 182px;

  border-right: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2px;

  padding: 30px 25px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  color: #252525;
`;

export const BoxImage = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  border: 1px solid #cc6237;
  overflow: hidden;

  svg {
    width: 40px;
    height: 40px;

    border-radius: 15px;
    border: 2px solid #ffff;

    display: block;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  width: 120px;
  height: 31px;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;

    color: #000000;

    &:last-child {
      font-size: 11px;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;

  border: none;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;

  padding: 10px;
  border-radius: 8px;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  color: #252525;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
