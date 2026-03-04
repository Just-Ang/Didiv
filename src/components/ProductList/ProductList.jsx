import { Button, Card,  CardButtons,  CardImg, CardInfo, CardPrice, CardTitle, CardWeight, CartLogo, FavoriteLogo, GridWrapper,} from "./ProductList.styled";
import { products } from "../../data/products";
import sprite from '../../img/symbol-defs.svg';

export const ProductList = ({ category }) => {
  const filteredProducts = products.filter(item => item.category === category);
console.log(filteredProducts);
  return (
    <GridWrapper>
      {filteredProducts.map(product => (
        <Card key={product.id}>
          <CardImg src={product.image} alt={product.name} />
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
               <span className="button-text">в кошик</span></Button>
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