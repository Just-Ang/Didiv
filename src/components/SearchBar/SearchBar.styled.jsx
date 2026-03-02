import styled from "styled-components";
export const Wrapper = styled.div`
 display: flex;
  align-items: center;
  background: #ffffff2b;
   border-radius: 12px;
 
 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
 width: 100%;
  max-width: 300px;
 @media screen and (min-width: 768px) {
   max-width:  1000px;
   margin-left: auto;
   margin-right:auto;
  }



`;

export const Input = styled.input`
  
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 16px;
  background-color: transparent;
  color: var(--white-color);
  width: 100%;

  max-width: 300px;

  ::placeholder {
    color: #a09589;

     
  }
  

  @media screen and (min-width: 768px) {
   max-width: 1000px;
  }
`;

export const Button = styled.button`
  margin-right: 6px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
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


export const ButtonLogo = styled.svg`
  width: 24px;
  height: 24px;
  

`;

