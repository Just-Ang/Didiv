import { CatalogBox, CatalogTitle, ImgWrapper, ItemImg, ItemTitle, Section, StyledLink } from './CatalogPage.styled';
import { Container } from './CatalogPage.styled';
// import { categories } from "../..//data/categories";
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const CatalogPage = () =>  {
 
  //  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/api/products?populate=*`)
  //     .then(res => res.json())
  //     .then(data =>  setProducts(data.data));
  // }, []);
  // console.log(products);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchCategories() {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories?populate=image`
      );
      const data = await res.json();

      console.log(data);

      setCategories(
        data.data.map(cat => ({
          id: cat.id_title, 
          title: cat.title,
       image: cat.image.url,
        }))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  fetchCategories();
}, []);
  
if (loading) {
  return<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="var(--orange-color)"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>;
}

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
