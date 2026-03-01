
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
    justify-content: space-between;
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
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;