import { Button, Card,  CardButtons,  CardImg, CardInfo, CardPrice, CardTitle, CardWeight, GridWrapper,} from "./ProductList.styled";
import { products } from "../../data/products";

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
            <Button>Додати в кошик</Button>
            <Button>Додати в обране</Button>
          </CardButtons>
        </Card>
      ))}
    </GridWrapper>
  );
};