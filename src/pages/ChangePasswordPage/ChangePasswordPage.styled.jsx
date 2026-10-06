import styled from 'styled-components';

export const Container = styled.div`
 background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);

  @media screen and (min-width:768px) {
    padding: 32px;
  }

  @media screen and (min-width:1440px) {
    padding: 40px;
  }
`;



export const Form = styled.form`
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
   @media screen and (min-width:768px) {
    margin-right:auto;
    margin-left: 0;
    
  }
`;

export const Title = styled.h1`
  margin: 0 0 12px;

    font-family: var(--main-font);
    font-size: 28px;
    color: var(--black-color);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;

  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 40px;

  font-size: 17px;
  line-height: 1.5;

  color: #777;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
 font-family: var(--second-font);
 font-weight:300;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 1.3;

  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 14px;

  box-sizing: border-box;

      padding: 0 18px;
    border-radius: 14px;
    border: 1px solid #ddd;
 

  background: transparent;

  font-family: inherit;
  font-size: 18px;
  color: #111;

  outline: none;

  transition:
    border-color 180ms ease,
    background-color 180ms ease;

  &::placeholder {
    color: #aaa;
  }

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #111;
    background: #fafafa;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;

  margin-top: 8px;

    border: none;
    border-radius: 14px;
    background: #ef7d1a;
    color: white;
  cursor: pointer;
 

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background-color 180ms ease,
    color 180ms ease,
    opacity 180ms ease;

  &:hover:not(:disabled) {
    background: #e47616;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  width: 100%;

  margin-top: 14px;
  padding: 12px 0;

  border: 0;
  background: transparent;

  font-family: inherit;
  font-size: 14px;
  color: #777;

  cursor: pointer;

  transition: color 180ms ease;

  &:hover {
    color: #111;
  }
`;

export const ErrorMessage = styled.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #b42318;
`;

export const Message = styled.p`
  margin: -4px 0 20px;

  font-size: 13px;
  line-height: 1.4;

  color: #26734d;
`;