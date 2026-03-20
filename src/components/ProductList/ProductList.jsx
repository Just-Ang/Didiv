import { Button, Card,  CardButtons,  CardImg, CardInfo, CardPrice, CardTitle, CardWeight, CartLogo, FavoriteLogo, GridWrapper,} from "./ProductList.styled";
import { products } from "../../data/products";
import sprite from '../../img/symbol-defs.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import { toggleFavorite } from "../../redux/favoritesSlice";
import placeholder from '../../../public/nofoto.png';

export const ProductList = ({ category, selectedFilters = {}  }) => {
let filteredProducts = products.filter(p => p.category === category);
  const navigate = useNavigate(); // хук для програмного переходу
 const dispatch = useDispatch();
   const favorites = useSelector(state => state.favorites.items);
   

const handleAdd = (product,e) => {
  e.stopPropagation();
  dispatch(addToCart( { 
  ...product, 
  quantity: 1  
}));
   toast.success(`${product.name} додано в кошик!`);
};
const HandleAddFavorite = (product, e) => {
 
   e.stopPropagation();
       const exists = favorites.some((favItem) => favItem.id === product.id);

    dispatch(toggleFavorite(product));
    if (exists) {
    toast.warning(`${product.name} видалено з обраного`);
  } else {
    toast.info(`${product.name} додано в обране`);
  }

}
  // фільтруємо по чекбоксам
  Object.keys(selectedFilters).forEach(key => {
    const value = selectedFilters[key];
    if (Array.isArray(value) && value.length > 0) {
      filteredProducts = filteredProducts.filter(p => value.includes(p[key]));
    }
    // фільтруємо по range
    if (typeof value === "string" || typeof value === "number") {
      if (key === "price") {
        filteredProducts = filteredProducts.filter(p => p.price <= Number(value));
      }
    }
  });
  return (<>
    <ToastContainer
    />
    <GridWrapper>
      
      {filteredProducts.map(product => (
        <Card key={product.id}
         onClick={() => navigate(`/product/${product.id}`)}
          style={{ cursor: "pointer" }} >
          <CardImg  src={product.image?.[0] || placeholder}
                              alt={product.name}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = placeholder;
                              }} />
          <CardInfo>
            <CardTitle>{product.name}</CardTitle>
            <CardPrice>{product.price} грн</CardPrice>
       {product.weight && <CardWeight>{product.weight} грам</CardWeight>}
    
          </CardInfo>

          <CardButtons>
            <Button onClick={(e) => handleAdd(product,e)} >
              <CartLogo>
                   <use href={`${sprite}#icon-cart`} />
                </CartLogo>
               <span className="button-text"></span></Button>
               
            <Button  onClick={(e) => HandleAddFavorite(product,e)}>
              <FavoriteLogo>
                       <use href={`${sprite}#icon-heart`} />
                    </FavoriteLogo>
            </Button>
          </CardButtons>
        </Card>
      ))}
    </GridWrapper>
    </>
  );
};