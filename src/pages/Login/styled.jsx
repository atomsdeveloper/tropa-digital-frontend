import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxLogin = styled.div`
  max-width: 765.5px;
  height: 498px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  border-radius: 20px;

  background-color: white;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 760px) {
    height: 420px;
  }
`;

export const BoxForm = styled.div`
  width: 339px;
  height: 478px;

  padding: 40px 20px 40px 20px;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 760px) {
    padding: 5px 20px 20px 20px;
    justify-content: flex-end;
  }
`;

export const BoxFormContent = styled.div`
  width: 299px;
  height: 388px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
  gap: 45px;

  @media only screen and (max-width: 760px) {
    padding-bottom: 0px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 35px;

  font-size: 26px;
  font-weight: 700;
  line-height: 15px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  color: #cc6237;

  span {
    font-size: 13px;
    line-height: 15px;
    color: #a7a7a7;
    font-weight: 400;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #a7a7a7;
`;

export const BoxImage = styled.div`
  width: 397.5px;
  height: 478px;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const BoxBgImage = styled.div`
  width: 355.5px;
  height: 478px;

  margin-left: 40px;

  border-radius: 20px;

  background-color: #cc6237;

  position: absolute;

  svg {
    width: 357px;
    height: 316px;

    top: 163px;
    position: relative;
    right: 35px;
  }
`;
