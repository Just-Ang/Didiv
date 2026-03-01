import styled from "styled-components";
export const Wrapper = styled.div`
 display: flex;
  align-items: center;
  background: #45200e4b;
   border-radius: 12px;
 
 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
 
  max-width: 520px;
  
 
 @media screen and (max-width: 768px) {
 background: ${props => (props.isMobileOpen ? "#45200e4b" : "transparent")};
  
  }

  



`;

export const Input = styled.input`
display: none;
  
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 16px;
  background-color: transparent;
  color: var(--white-color);
 
 
  
  
  
  ::placeholder {
    color: #a09589;

     
  }
  display: ${props => (props.isMobileOpen ? "block" : "none")};

  @media(min-width: 600px) {
    display: block; /* на більших екранах інпут завжди видно */
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
   @media screen and (min-width: 600px) {
       background: #453821;
  
  }
`;
export const BtnClose = styled.button`
margin-right: 6px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: none;
   background: transparent;
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
    @media screen and (min-width: 600px) {
      
  display: none;
  }
  
`


export const ButtonLogo = styled.svg`
  width: 24px;
  height: 24px;
  

`;
export const ButtonCloseLogo = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--black-color);

`;
