import styled from "styled-components";

export const Layout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;

  background-color: #ffffff;
`;

export const Menu = styled.aside`
  width: 210px;
  height: 100%;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  padding-top: 20px;

  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BoxImage = styled.div`
  width: 210px;
  height: 25px;

  padding-left: 25px;
  padding-right: 25px;

  gap: 10px;
`;

export const Container = styled.main`
  flex: 1;
  height: auto;

  background-color: #f8f8f8;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overscroll-behavior: contain;
`;
