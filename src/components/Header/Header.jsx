import {
  CatalogIcon,
  CloseButton,
  HeaderContainer,
  HeadeRight,
  HeaderSection,
  HeaderUp,
  LoginButton,
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
import { BadgePercent, Home, Info, LayersPlus, Mail, ShoppingBag, UserRound, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = ( { openLogin,
 }) => {
  const [menuOpen, setMenuOpen] = useState(false);



const navigate = useNavigate();

// const handleAccountClick = () => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     navigate("/account");
//   } else {
//     openLogin(); 
//   }
// };
const handleAccountClick = () => {
  const token = localStorage.getItem("token");

  console.log("token:", token);

  if (token) {
    console.log("navigate");
    navigate("/account");
  } else {
    console.log("login");
    openLogin();
  }
};
  return (
    <HeaderSection>
      <HeaderContainer>
        <WrapperDev>
          <HeaderUp>
            <StoreTitle to="/">Дідів хлів</StoreTitle>

            <HeadeRight>
              <CartIcon></CartIcon>
              <LoginButton onClick={handleAccountClick}>
<UserRound  size ={28} color="#f2ebd4" strokeWidth={1.9} />
</LoginButton>

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

                  <StyledLink onClick={() => setMenuOpen(false)} to="/catalog">
                    <ShoppingBag size={22} strokeWidth={1.5} /> Каталог
                  </StyledLink>
                  <StyledLink  onClick={() => setMenuOpen(false)} to="/catalog/new">
                   <LayersPlus  size={22} strokeWidth={1.5} />Новинки</StyledLink>
                  <StyledLink onClick={() => setMenuOpen(false)} to="/catalog/sale">
                <BadgePercent size={22} strokeWidth={1.5} />Акційні товари</StyledLink>
                  <StyledLink onClick={() => setMenuOpen(false)} to="/about">
                    <Info size={22} strokeWidth={1.5} /> Про нас
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
