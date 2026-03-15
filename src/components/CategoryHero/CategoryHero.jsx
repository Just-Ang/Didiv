import { Card, CardTitle, CatalogButton,  GridWrapper,} from "./CategoryHero.styled";
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
        <span>Весь каталог</span>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </CatalogButton>
    </GridWrapper>
  );
};

export default CategoryHero;