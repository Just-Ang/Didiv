import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
`;

export const Title = styled.h1`
  margin: 0 0 12px;

  font-size: 28px;
  line-height: 1.2;
  font-weight: 500;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;
  color: #777;

  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 14px 16px;

  border: 1px solid #d8d8d8;
  border-radius: 0;

  font-family: inherit;
  font-size: 15px;

  outline: none;

  transition: border-color 0.2s ease;

  &:focus {
    border-color: #222;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 20px;

  border: none;
  border-radius: 0;

  background: #222;
  color: #fff;

  font-family: inherit;
  font-size: 15px;
  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;

  font-size: 14px;
  color: #c62828;
`;

export const SuccessMessage = styled.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;
  color: #555;

  text-align: center;
`;