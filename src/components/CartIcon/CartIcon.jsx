import { useSelector } from "react-redux";

import { Badge, CartLogo, StyledLink, Wrapper } from "./CartIcon.styled";

import sprite from '../../img/symbol-defs.svg';
export const CartIcon = ({ onClick }) => {
const cartCount = useSelector(state => state.cart.items.length);
  return (


<StyledLink to="/cart">
  <Wrapper onClick={onClick}>

  <CartLogo>
     <use href={`${sprite}#icon-cart`} />
  </CartLogo>
    {cartCount > 0 && <Badge>{cartCount}</Badge>}
    </Wrapper>
</StyledLink>
  );
};