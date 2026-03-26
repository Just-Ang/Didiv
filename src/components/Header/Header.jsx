import {
  CatalogIcon,
  CloseButton,
  HeaderContainer,
  
  HeadeRight,
  HeaderSection,
  HeaderUp,


  MenuButton,

  MenuContent,

  MenuFooter,

  MobileMenu,
  Overlay,
  StoreTitle,
  StyledLink,

  WrapperDev,
} from './Header.styled';

import { useState } from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { CartIcon } from '../CartIcon/CartIcon';
import { Menu } from '../Menu/Menu';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

import sprite from '../../img/symbol-defs.svg';
import { Home, Info, Mail, ShoppingBag, X } from 'lucide-react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <HeaderSection>
    <HeaderContainer>
      {/* <StyledLinkBig to="/">
          <LogoBig src={logo} alt="logo"></LogoBig>
        </StyledLinkBig> */}
        
      
      <WrapperDev>
        <HeaderUp>
          <StoreTitle to="/">Дідів хлів</StoreTitle>
        {/* <StyledLink to="/">
          <Logo src={logo} alt="logo"></Logo>
        </StyledLink> */}
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
            <CloseButton onClick={() => setMenuOpen(false)}>
              <X size={28} strokeWidth={1.5} />
  </CloseButton>
           
  <MenuContent>
    <StyledLink onClick={() => setMenuOpen(false)} to="/">
     <Home size={22} strokeWidth={1.5} /> Головна
    </StyledLink>
    <StyledLink onClick={() => setMenuOpen(false)} to="/about">
      <Info size={22} strokeWidth={1.5} /> Про нас
    </StyledLink>
    <StyledLink onClick={() => setMenuOpen(false)} to="/catalog">
      <ShoppingBag size={22} strokeWidth={1.5} /> Каталог
    </StyledLink>
    <StyledLink onClick={() => setMenuOpen(false)} to="/contacts">
      <Mail size={22} strokeWidth={1.5} /> Контакти
    </StyledLink>
  </MenuContent>

  <MenuFooter>
    <p>© 2020 Дідів Хлів</p>
  </MenuFooter>
</MobileMenu>
        </HeadeRight>
      </HeaderUp>
      <SearchBar></SearchBar>
      </WrapperDev>
    </HeaderContainer>
    </HeaderSection>
  );
};
