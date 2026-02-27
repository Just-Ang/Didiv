import { useSelector } from "react-redux";
   import { Link } from "react-router-dom";
import { Badge, Wrapper } from "./CartIcon.styled";


export const CartIcon = ({ onClick }) => {
const cartCount = useSelector(state => state.cart.items.length);
// const cartCount = 5;
//   const favCount = useSelector(state => state.favorites.items.length);

  return (


<Link to="/cart">
  <Wrapper onClick={onClick}>
  
    {cartCount > 0 && <Badge>{cartCount}</Badge>}
    </Wrapper>
</Link>
  );
};