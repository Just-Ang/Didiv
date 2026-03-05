import { Button, Card,  CardButtons,  CardImg, CardInfo, CardPrice, CardTitle, CardWeight, CartLogo, FavoriteLogo, GridWrapper,} from "./ProductList.styled";
import { products } from "../../data/products";
import sprite from '../../img/symbol-defs.svg';
import { useNavigate } from "react-router-dom";

export const ProductList = ({ category, selectedFilters = {}  }) => {
let filteredProducts = products.filter(p => p.category === category);
  const navigate = useNavigate(); // хук для програмного переходу

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
  return (
    <GridWrapper>
      {filteredProducts.map(product => (
        <Card key={product.id}
         onClick={() => navigate(`/product/${product.id}`)} // перехід по кліку
          style={{ cursor: "pointer" }} >
          <CardImg src={product.image[0] } alt={product.name} />
          <CardInfo>
            <CardTitle>{product.name}</CardTitle>
            <CardPrice>{product.price} грн</CardPrice>
       {product.weight && <CardWeight>{product.weight} грам</CardWeight>}
    
          </CardInfo>

          <CardButtons>
            <Button>
              <CartLogo>
                   <use href={`${sprite}#icon-cart`} />
                </CartLogo>
               <span className="button-text"></span></Button>
            <Button>
              <FavoriteLogo>
                       <use href={`${sprite}#icon-heart`} />
                    </FavoriteLogo>
            </Button>
          </CardButtons>
        </Card>
      ))}
    </GridWrapper>
  );
};