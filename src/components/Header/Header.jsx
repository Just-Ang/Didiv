import { HeaderContainer, HeaderUp, Logo, ProductButton, Wrapper } from './Header.styled';
import logo from '../../img/logo.png';
import { useEffect, useRef, useState } from 'react';
import ProductsMenu from '../ProductsMenu/ProductsMenu';
import { SearchBar } from '../SearchBar/SearchBar';
import {  CartIcon } from '../CartIcon/CartIcon';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <HeaderUp>
        
      
      <Wrapper
          ref={wrapperRef}
          
        >
          <ProductButton onClick={() => setOpen((prev) => !prev)}>
            ☰ Продукція
          </ProductButton>
          {open && <ProductsMenu />}
        </Wrapper>
        <Logo src={logo} alt="logo">
        
      </Logo>
      </HeaderUp>
        <SearchBar></SearchBar>
        <CartIcon></CartIcon>
        <FavoriteIcon></FavoriteIcon>
        
    </HeaderContainer>
  );
};
