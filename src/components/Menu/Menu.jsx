import { MenuNav, StyledLink } from './Menu.styled';

export const Menu = () => {
  return (
    <MenuNav>
      <StyledLink to="/">Головна</StyledLink>
      <StyledLink to="/about">Про нас</StyledLink>
      <StyledLink to="/catalog">Каталог</StyledLink>
      <StyledLink to="/contacts">Контакти</StyledLink>
    </MenuNav>
  );
};
