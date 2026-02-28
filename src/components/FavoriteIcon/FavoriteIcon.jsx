import { useSelector } from "react-redux";
   import { Link } from "react-router-dom";
import { Badge, FavoriteLogo, Wrapper } from "./FavoriteIcon.syled";
import sprite from '../../img/symbol-defs.svg';


export const FavoriteIcon = ({ onClick }) => {

 const favCount = useSelector(state => state.favorites.items.length);

  return (


<Link to="/cart">
  <Wrapper onClick={onClick}>

      <FavoriteLogo>
         <use href={`${sprite}#icon-heart`} />
      </FavoriteLogo>
  
    {favCount > 0 && <Badge>{favCount}</Badge>}
    </Wrapper>
</Link>
  );
};