import { NewArrivals } from '../../components/NewArrivals/NewArrivals';
import {
  CatalogBox,
  CatalogTitle,
  ImgWrapper,
  ItemImg,
  ItemTitle,
  Section,
  StyledLink,
  WrapperNew,
} from './CatalogPage.styled';
import { Container } from './CatalogPage.styled';
// import { categories } from "../..//data/categories";
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const CatalogPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);

        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/categories?populate=*&pagination[limit]=50&sort=title:asc`
        );
        const data = await res.json();



        setCategories(
          data.data.map((cat) => ({
            id: cat.id_title,
            title: cat.title,
            image: cat.image?.url,
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
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="var(--orange-color)"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <Section>
      <Container>
        <WrapperNew>
          <NewArrivals />
        </WrapperNew>

        <CatalogTitle>Каталог</CatalogTitle>
        <CatalogBox>
          {categories.map((cat) => (
            <StyledLink key={cat.id} to={`/catalog/${cat.title}`}>
              <ImgWrapper>
                <ItemImg src={cat.image} alt={cat.title}></ItemImg>
              </ImgWrapper>

              <ItemTitle>{cat.title}</ItemTitle>
            </StyledLink>
          ))}
        </CatalogBox>
      </Container>
    </Section>
  );
};

export default CatalogPage;
