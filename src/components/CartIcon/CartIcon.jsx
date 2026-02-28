import { useSelector } from "react-redux";
   import { Link } from "react-router-dom";
import { Badge, CartLogo, Wrapper } from "./CartIcon.styled";

import sprite from '../../img/symbol-defs.svg';
export const CartIcon = ({ onClick }) => {
const cartCount = useSelector(state => state.cart.items.length);
// const cartCount = 5;
//   const favCount = useSelector(state => state.favorites.items.length);

  return (


<Link to="/cart">
  <Wrapper onClick={onClick}>

  <CartLogo>
     <use href={`${sprite}#icon-cart`} />
  </CartLogo>
    {cartCount > 0 && <Badge>{cartCount}</Badge>}
    </Wrapper>
</Link>
  );
};