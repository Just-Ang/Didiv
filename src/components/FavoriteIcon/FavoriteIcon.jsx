import { useSelector } from "react-redux";

import { Badge, FavoriteLogo, Wrapper } from "./FavoriteIcon.styled";
import sprite from '../../img/symbol-defs.svg';
import { StyledLink } from "../FavoriteIcon/FavoriteIcon.styled";


export const FavoriteIcon = ({ onClick }) => {

 const favCount = useSelector(state => state.favorites.items.length);

  return (


<StyledLink to="/favorite">
  <Wrapper onClick={onClick}>

      <FavoriteLogo>
         <use href={`${sprite}#icon-heart`} />
      </FavoriteLogo>
  
    {favCount > 0 && <Badge>{favCount}</Badge>}
    </Wrapper>
</StyledLink>
  );
};