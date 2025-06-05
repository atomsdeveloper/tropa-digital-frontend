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
`;

export const BoxForm = styled.div`
  width: 339px;
  height: 478px;

  padding: 40px 20px 40px 20px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 15px;

  color: #cc6237;

  margin: 25px 0 10px 0;
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #a7a7a7;
`;

export const Form = styled.form`
  width: 299px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 10px;

  gap: 15px;
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BoxImage = styled.div`
  width: 397.5px;
  height: 478px;
`;

export const BoxBgImage = styled.div`
  width: 355.5px;
  height: 478px;

  margin-left: 40px;

  border-radius: 20px;

  background-color: #cc6237;

  position: absolute;

  img {
    width: 357px;
    height: 316px;

    top: 178.5px;
    position: relative;
    right: 38px;
  }
`;
