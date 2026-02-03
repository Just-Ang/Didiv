import { HeaderContainer, Logo, ProductButton, Wrapper } from './Header.styled';
import logo from '../../img/logo.png';
import { useEffect, useRef, useState } from 'react';
import ProductsMenu from '../ProductsMenu/ProductsMenu';

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
      <Logo src={logo} alt="logo">
        
      </Logo>
      <Wrapper
          ref={wrapperRef}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ProductButton onClick={() => setOpen((prev) => !prev)}>
            ☰ Продукція
          </ProductButton>
          {open && <ProductsMenu />}
        </Wrapper>
    </HeaderContainer>
  );
};
