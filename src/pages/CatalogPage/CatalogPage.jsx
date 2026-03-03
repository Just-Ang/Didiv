import { CatalogBox, CatalogTitle, ItemImg, ItemTitle, StyledLink } from './CatalogPage.styled';
import { Container } from './CatalogPage.styled';
import { categories } from "../..//data/categories";

const CatalogPage = () => {
  return (
    <Container>
      <CatalogTitle>Каталог</CatalogTitle>
      <CatalogBox>
         {categories.map(cat => (
          <StyledLink key={cat.id} to={`/catalog/${cat.id}`}>
            <ItemImg src={cat.image} alt={cat.title}></ItemImg>
            
       <ItemTitle>{cat.title}</ItemTitle>
           
          </StyledLink>
        ))}

      </CatalogBox>

      
    </Container>
  );
};

export default CatalogPage;
