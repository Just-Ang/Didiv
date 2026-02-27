import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  width: 100%;
  max-width: 520px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 16px;

  ::placeholder {
    color: #9aa0a6;
  }
`;

export const Button = styled.button`
  margin-right: 6px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: none;
  background: #184c3f;
  color: white;
  cursor: pointer;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  :hover {
    transform: scale(1.05);
  }
`;