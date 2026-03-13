import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.div`
  background: radial-gradient(
    circle at 50% 45%,
    #634e3f 0%,
    #4d392d 35%,
    #36241b 65%,
    #1e0f09 100%
  );
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
    max-width: 1440px;
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
  /* display: grid;
grid-template-columns: 1fr auto 1fr; */
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

export const StyledLink = styled(Link)`
  color: var(--main-brand-color);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
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
        z-index: 5;
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

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

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
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: 0.3s;
  }
`;

export const MenuItem = styled.a`
  color: var(--black-color);
`;
