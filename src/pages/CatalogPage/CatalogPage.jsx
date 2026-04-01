import { CatalogBox, CatalogTitle, ImgWrapper, ItemImg, ItemTitle, Section, StyledLink } from './CatalogPage.styled';
import { Container } from './CatalogPage.styled';
// import { categories } from "../..//data/categories";
import { useEffect, useState } from 'react';

const CatalogPage = () =>  {
 
  //  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/api/products?populate=*`)
  //     .then(res => res.json())
  //     .then(data =>  setProducts(data.data));
  // }, []);
  // console.log(products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories?populate=image`);
      const data = await res.json();
      console.log(data);
      setCategories(
        data.data.map(cat => ({
          id: cat.id_title,
          title: cat.title,
          image: `${import.meta.env.VITE_API_URL}${cat.image.url}`
        }))
      );
    }

    fetchCategories();
  }, []);

  return (
    <Section>
    <Container>
    




      <CatalogTitle>Каталог</CatalogTitle>
      <CatalogBox>
         {categories.map(cat => (
          <StyledLink key={cat.id} to={`/catalog/${cat.id}`}>
            <ImgWrapper><ItemImg src={cat.image} alt={cat.title}></ItemImg></ImgWrapper>
            
       <ItemTitle>{cat.title}</ItemTitle>
           
          </StyledLink>
        ))}

      </CatalogBox>

      
    </Container>
    </Section>
  );
};

export default CatalogPage;
