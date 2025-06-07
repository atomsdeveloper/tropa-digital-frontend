import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  height: 825px;

  padding: 0px 30px 30px 30px;
`;

export const BoxContent = styled.section`
  width: 100%;
  height: 289px;

  border-radius: 10px;
  border: 1px solid rgba(9, 66, 143, 0.17);

  padding: 20px;

  background-color: rgba(255, 255, 255, 1);
`;

export const Content = styled.div`
  width: 100%;
  height: 249px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;

  border-bottom: 1px;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const HeaderContent = styled.div`
  width: 360px;
  height: 36px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BoxInput = styled.div`
  width: 203px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 33px;

  padding: 5px 15px 5px 15px;

  gap: 10px;

  background-color: rgba(246, 246, 246, 1);

  svg {
    width: 12px;
    height: 12px;

    position: relative;
    top: 2.25px;
    left: 2.25px;
  }
`;
