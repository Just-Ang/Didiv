import { useSelector } from "react-redux";
   import { Link } from "react-router-dom";
import { Badge, Wrapper } from "./FavoriteIcon.syled";


export const FavoriteIcon = ({ onClick }) => {

 const favCount = useSelector(state => state.favorites.items.length);

  return (


<Link to="/cart">
  <Wrapper onClick={onClick}>
  
    {favCount > 0 && <Badge>{favCount}</Badge>}
    </Wrapper>
</Link>
  );
};