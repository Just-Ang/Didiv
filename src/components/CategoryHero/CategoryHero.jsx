import { ArrowRight } from "lucide-react";
import { ArrowWrapper, Card, CardTitle, CatalogButton,  GridWrapper, TitleCatalog,} from "./CategoryHero.styled";
import { useEffect, useState } from "react";

const CategoryHero = () => {

   const [categories, setCategories] = useState([]);
  
   useEffect(() => {
  async function fetchCategories() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories?populate=image&sort=title:asc`,
        {
          credentials: "omit", 
        }
      );

      if (!res.ok) {
        console.error("Server error:", res.status);
        return;
      }

      const data = await res.json();
   

      if (!data.data) {
        console.error("No data field:", data);
        return;
      }

      setCategories(
        data.data.map(cat => ({
          
          title: cat.title,
          image: cat.image?.url,
        }))
      );


      
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  fetchCategories();
}, []);
  

  return (<>
  <TitleCatalog>Каталог</TitleCatalog>
    <GridWrapper>
      {categories.slice(0, 7).map((cat) => (
    
  
        <Card to={`catalog/${cat.title}`}  key={cat.title} bg={cat.image} isBig={cat.big}>
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