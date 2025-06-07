import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px;

  h1,
  h2 {
    width: 100%;
    height: 23px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: rgba(0, 0, 0, 0.2);

  span {
    color: #252525;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: rgba(204, 98, 55, 0.9);
`;
