
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
max-width: 768px;
padding: 20px;
padding-left: 50px;
padding-right: 50px;
text-align:center;
background: radial-gradient(
  circle at 50% 45%,
  #6F4B30 0%,
  #56341F 35%,
  #382116 65%,
  #1E0F09 100%
);



@media screen and (min-width: 1440px) {
   max-width: 1440px,
  }
`;

export const HeaderUp = styled.div`
display: flex;
    
`;
export const HeaderDown = styled.div`
display: flex;
    justify-content: space-around;
`;


 export const StyledLink = styled(Link)`
      display: flex;
    align-items: center;
    text-align: center;
        justify-content: center;
`;
export const Logo = styled.img`
  display: flex;
  width:100px;
  height:100px;
  
  justify-content: center;
  align-items: center;
  
`;


export const TitleLogo = styled.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;

export const CatalogIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill:var(--white-color);
`
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: var(--white-color);
  border: none;
  border-radius: 30px;

  padding: 12px 22px;
  font-size: 15px;
  font-weight: 600;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // показуємо тільки на мобільних
  }

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
   
  }
`;

export const Wrapper = styled.div`

  z-index: 9999;
`;



// export const Burger = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block; // показуємо тільки на мобільних
//   }

//   div {
//     width: 25px;
//     height: 3px;
//     background-color: #333;
//     margin: 5px 0;
//     transition: 0.4s;
//   }
// `;

export const MobileMenu = styled.div`
  display: flex;
  font-family: DM Serif Display;
  font-size: 25px;

@media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: var(--white-color);
    color: var(--black-color);

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};

    transition: transform 0.3s ease-in-out;

    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
    @media screen and (min-width: 768px) {
  display: none;
  }
`;
export const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: 0.3s;
  }
`;

export const MenuItem = styled.a`
color: var(--black-color);
  
`