import { ArrowRight } from "lucide-react";
import { ArrowWrapper, Card, CardTitle, CatalogButton,  GridWrapper,} from "./CategoryHero.styled";
 const categories = [
  { id: 'bikes', title: 'Велосипеди', image: import.meta.env.BASE_URL + 'catalog/bikes.jpeg', big: true },
  { id: 'saddles', title: 'Сідла', image: import.meta.env.BASE_URL + 'catalog/saddles.jpeg' },
  { id: 'wheels', title: 'Колеса', image: import.meta.env.BASE_URL + 'catalog/wheels.jpeg' },
  { id: 'frames', title: 'Рами', image: import.meta.env.BASE_URL + 'catalog/frames.jpeg' },
  { id: 'handlebars', title: 'Керма', image: import.meta.env.BASE_URL + 'catalog/handlebars.jpeg' },
  { id: 'stems', title: 'Виноси', image: import.meta.env.BASE_URL + 'catalog/stems.jpeg' },
 
];
const CategoryHero = () => {
  return (
    <GridWrapper>
      {categories.map((cat) => (
    
        <Card href={`Didiv/catalog/${cat.id}`} key={cat.id} bg={cat.image} isBig={cat.big}>
          <CardTitle>{cat.title}</CardTitle>
        </Card> 
      ))}

      <CatalogButton href="catalog">
        <p>Весь каталог</p>
        <ArrowWrapper>
              <ArrowRight size={24} />
            </ArrowWrapper>
      </CatalogButton>
    </GridWrapper>
  );
};

export default CategoryHero;