import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 425px;
`;

export const BoxTitle = styled.section`
  width: 100%;
  height: 15px;

  padding: 0px 25px;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 12%;

  text-transform: uppercase;

  color: #a3a3a3;
`;

export const List = styled.ul`
  width: 100%;
  height: 615px;

  list-style: none;

  padding: 0px 15px;
`;

export const ListItem = styled.li`
  width: 180px;
  height: 35px;

  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 5px;

  color: #252525;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  padding: 10px;

  border-radius: 8px;

  background-color: ${({ $active }) => ($active ? "#cc6237" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#252525")};

  &:hover {
    background-color: ${({ $active }) =>
      $active ? "#cc6237" : "rgba(0, 0, 0, 0.05);"};
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  width: 160px;
  height: 1px;

  background-color: rgba(0, 0, 0, 0.1);
`;
