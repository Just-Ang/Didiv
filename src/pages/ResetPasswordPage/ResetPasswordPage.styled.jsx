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

  font-size: 30px;
  line-height: 1.2;
  font-weight: 300;

  color: #312620;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 32px;

  font-size: 15px;
  line-height: 1.5;

  color: #8d837d;

  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  color: #3d2f29;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;

  box-sizing: border-box;

  padding: 0 18px;

  border: 1px solid #ded6cc;
  border-radius: 18px;

  background: #fff;

  font-family: inherit;
  font-size: 16px;
  color: #312620;

  outline: none;

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #ff7a00;

    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.15);
  }

  &::placeholder {
    color: #aaa29b;
  }

  &:hover {
    border-color: #cfc5ba;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
 
`;
export const EyeButton = styled.button`
  position: absolute;
  top:50%;
  right: 18px;

  transform: translateY(-50%);

  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #8d837d;

  padding: 0;

  &:hover {
    color: #ff7a00;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 58px;

  padding: 0 20px;

  border: none;
  border-radius: 18px;

  background: #ff7a00;
  color: #fff;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #eb6f00;
    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(255, 122, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`;
export const ChangeOk = styled.div`
display: flex;
justify-content: center;
align-items:center;`

export const ButtonIn = styled.button`
margin-top: 50px;
   margin-left:auto;
   margin-right:auto;
  height: 58px;

  padding: 0 20px;

  border: none;
  border-radius: 18px;

  background: #ff7a00;
  color: #fff;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #eb6f00;
    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(255, 122, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`
export const ErrorMessage = styled.p`
  margin: -8px 0 8px;

  font-size: 14px;
  line-height: 1.4;

  color: #c62828;
`;

export const SuccessMessage = styled.p`
  margin: 20px 0 0;

  font-size: 15px;
  line-height: 1.5;

  color: #555;

  text-align: center;
`;