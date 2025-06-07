import styled from "styled-components";

export const Form = styled.form`
  width: 299px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 35px;
`;

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  svg {
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
