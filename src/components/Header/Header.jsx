import {
  CatalogIcon,
  HeaderContainer,
  
  HeadeRight,
  HeaderSection,
  HeaderUp,
  Logo,
  MenuButton,

  MobileMenu,
  Overlay,
  StyledLink,
} from './Header.styled';
import logo from '../../img/logo.png';
import { useState } from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { CartIcon } from '../CartIcon/CartIcon';
import { Menu } from '../Menu/Menu';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

import sprite from '../../img/symbol-defs.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <HeaderSection>
    <HeaderContainer>
      <HeaderUp>
        <StyledLink to="/">
          <Logo src={logo} alt="logo"></Logo>
        </StyledLink>
        <HeadeRight>
          <CartIcon></CartIcon>

          <FavoriteIcon></FavoriteIcon>
          <Menu></Menu>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            <CatalogIcon>
              <use href={`${sprite}#icon-menu`} />
            </CatalogIcon>
          </MenuButton>

          <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
          <MobileMenu open={menuOpen}>
           
  <StyledLink  onClick={() => setMenuOpen(false)} to="/">Головна</StyledLink>
  <StyledLink  onClick={() => setMenuOpen(false)}to="/about">Про нас</StyledLink>
  <StyledLink onClick={() => setMenuOpen(false)} to="/catalog">Каталог</StyledLink>
  <StyledLink onClick={() => setMenuOpen(false)} to="/contacts">Контакти</StyledLink>
</MobileMenu>
        </HeadeRight>
      </HeaderUp>
      <SearchBar></SearchBar>
    </HeaderContainer>
    </HeaderSection>
  );
};
