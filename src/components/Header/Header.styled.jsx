import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;

  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0;
    padding-right: 0;
  }
`;
export const WrapperDev = styled.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;
export const HeaderUp = styled.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const HeadeRight = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;


//   color: var(--main-brand-color);
//   display: flex;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;
export const StyledLinkBig = styled(Link)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const Logo = styled.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const LogoBig = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;

export const StoreTitle = styled(Link)`
  font-size: 40px;
  font-family: Poiret One;
  /* font-family: 'MyFont'; */
  font-weight: 800;
  color: var(--white-color);
  letter-spacing:0.2em;

  &::after {
    content: '.';
    color: var(--orange-color); 
    margin-left: 2px;
  }
`;

export const TitleLogo = styled.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;

export const CatalogIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: var(--white-color);
  border: none;
  border-radius: 30px;
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

// export const MobileMenu = styled.div`
//   display: flex;
//   font-family: DM Serif Display;
//   font-size: 25px;

//   @media (max-width: 768px) {
//         z-index: 5;
//     position: fixed;
//     top: 0;
//     right: 0;
//     width: 280px;
//     height: 100vh;
//     background-color: var(--second-background);
//     color: var(--black-color);

//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 30px;

//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

//     transition: transform 0.3s ease-in-out;

//     box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
//   }
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;
// export const Overlay = styled.div`
//   @media (max-width: 768px) {
//     position: fixed;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.4);
//     opacity: ${({ open }) => (open ? 1 : 0)};
//     visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
//     transition: 0.3s;
//   }
// `;

export const MenuItem = styled.a`
  color: var(--black-color);
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; /* Трохи вужче, щоб бачити фон */
  max-width: 350px;
  height: 100%;
  background: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 40px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  gap: 15px; /* Відступ між іконкою і текстом */
  transition: color 0.3s;

  svg {
    color: #d35400; /* Колір як у вашої кнопки на фоні */
    font-size: 24px;
  }

  &:hover, &:active {
    color: #d35400;
  }
`;

export const MenuFooter = styled.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px); /* Гарне розмиття фону */
  z-index: 999;
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: opacity 0.3s;
`;