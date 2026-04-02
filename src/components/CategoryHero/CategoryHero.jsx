import { ArrowRight } from "lucide-react";
import { ArrowWrapper, Card, CardTitle, CatalogButton,  GridWrapper, TitleCatalog,} from "./CategoryHero.styled";
import { useEffect, useState } from "react";
//  const categories = [
//   { id: 'bikes', title: 'Велосипеди', image: import.meta.env.BASE_URL + 'catalog/bikes.jpeg', big: true },
//   { id: 'saddles', title: 'Сідла', image: import.meta.env.BASE_URL + 'catalog/saddles.jpeg' },
//   { id: 'wheels', title: 'Колеса', image: import.meta.env.BASE_URL + 'catalog/wheels.jpeg' },
//   { id: 'frames', title: 'Рами', image: import.meta.env.BASE_URL + 'catalog/frames.jpeg' },
//   { id: 'handlebars', title: 'Керма', image: import.meta.env.BASE_URL + 'catalog/handlebars.jpeg' },
//   { id: 'stems', title: 'Виноси', image: import.meta.env.BASE_URL + 'catalog/stems.jpeg' },
 
// ];
const CategoryHero = () => {

   const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      async function fetchCategories() {
        const res = await fetch("https://useful-authority-52fd526d2c.strapiapp.com/api/categories?populate=image");
        const data = await res.json();
        console.log(data);
        setCategories(
          data.data.map(cat => ({
            id: cat.id_title,
            title: cat.title,
            image: cat.image.url,
          }))
        );
      }
  
      fetchCategories();
    }, []);
  
  return (<>
  <TitleCatalog>Каталог</TitleCatalog>
    <GridWrapper>
      {categories.slice(0, 6).map((cat) => (
    
        <Card to={`catalog/${cat.id}`}  key={cat.id} bg={cat.image} isBig={cat.big}>
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
    </>
  );
};

export default CategoryHero;