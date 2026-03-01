import {
  CatalogIcon,
  HeaderContainer,
  HeaderDown,
  HeaderUp,
  Logo,
  MenuButton,

  MenuItem,

  MobileMenu,

  Overlay,

  StyledLink,

  TitleLogo,

} from './Header.styled';
import logo from '../../img/logo.png';
import {useState } from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import { CartIcon } from '../CartIcon/CartIcon';
import {Menu} from '../Menu/Menu'
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

import sprite from '../../img/symbol-defs.svg';



export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
 

 

  return (
    <HeaderContainer>
      <HeaderUp>
    
        <Menu></Menu>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                <CatalogIcon> <use href={`${sprite}#icon-menu`} /></CatalogIcon>
      </MenuButton>

     <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
      <MobileMenu open={menuOpen}>
        <MenuItem href="#">Головна</MenuItem>
        <MenuItem href="#">Про нас</MenuItem>
        <MenuItem href="#">Каталог</MenuItem>
        <MenuItem href="#">Контакти</MenuItem>
      </MobileMenu>
        <TitleLogo>Дідів хлів</TitleLogo>
        
       
      </HeaderUp>
       <StyledLink to="/">
          <Logo src={logo} alt="logo"></Logo>
        </StyledLink>
      <HeaderDown>
        
      <CartIcon></CartIcon>
      <SearchBar></SearchBar>
      <FavoriteIcon></FavoriteIcon>
      </HeaderDown>
    </HeaderContainer>
  );
};
