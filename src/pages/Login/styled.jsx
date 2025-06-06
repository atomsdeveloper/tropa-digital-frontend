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

export const BoxFormContent = styled.div`
  width: 299px;
  height: 388px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
  gap: 45px;
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

export const Form = styled.form`
  width: 299px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 35px;
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    position: relative;
    top: -3.5rem;
    left: 25rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;

  color: #cc6237;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 100px;

  font-size: 13px;
  line-height: 15px;

  background-color: #f6f6f6;

  color: #657593;

  &:focus {
    outline: none;
    border-color: #cc6237;
  }
`;

export const Button = styled.button`
  width: 299px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #cc6237;

  border: none;
  border-radius: 100px;

  font-size: 13px;
  font-weight: 500;
  line-height: 15px;

  cursor: pointer;

  transition: background-color 300ms ease-out, box-shadow 300ms ease-out,
    opacity 300ms ease-out;

  &:hover {
    background-color: #b0552f;
    opacity: 0.95;
    box-shadow: 0 4px 16px rgba(204, 98, 55, 0.15);
  }
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
