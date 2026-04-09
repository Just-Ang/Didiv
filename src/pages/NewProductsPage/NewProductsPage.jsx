import { useEffect, useState } from 'react';
import {
  GridWrapper,
  Card,
  CardImg,
  CardInfo,
  CardTitle,
  CardPrice,
  CardButtons,

} from './NewProductsPage.styled';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { TitleNew } from './NewProductsPage.styled';
import { Container } from './NewProductsPage.styled';
import { Section } from './NewProductsPage.styled';
import { ButtonC } from './NewProductsPage.styled';
import { ButtonF } from './NewProductsPage.styled';
import { BallTriangle } from 'react-loader-spinner';
import { PaginationWrapper } from './NewProductsPage.styled';
import { PageButton } from './NewProductsPage.styled';
export const NewProductsPage = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const indexOfLast = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirst = indexOfLast - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

 useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
}, [currentPage]);

 useEffect(() => {
  const fetchProducts = async () => {
    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    const isoDate = oneWeekAgo.toISOString();

    try {
         setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[createdAt][$gte]=${isoDate}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setProducts(data.data);
    } catch (error) {
      console.error('Помилка при завантаженні продуктів:', error);
    } finally {
      setLoading(false); // завжди вимикаємо лоадер
    }
  };

  fetchProducts();
}, []);

  const favorites = useSelector((state) => state.favorites.items);

  const handleAdd = (product, e) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success(`${product.name} додано в кошик!`);
  };
  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
    const exists = favorites.some((favItem) => favItem.id === product.id);

    dispatch(toggleFavorite(product));
    if (exists) {
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      toast.info(`${product.name} додано в обране`);
    }
  };

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
        <ToastContainer autoClose={1500} />
      <TitleNew>Нові товари</TitleNew>
      <GridWrapper>
        {currentProducts.map((product) => {
          const isFavorite = favorites.some((fav) => fav.id === product.id);

          return (
            <Card
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardImg src={product.images?.[0]?.url} alt={product.name} />
              <CardInfo>
                <CardTitle>{product.name}</CardTitle>
                <CardPrice>{product.price} грн</CardPrice>
              </CardInfo>
              <CardButtons>
                <ButtonC onClick={(e) => handleAdd(product, e)}>
                  <ShoppingCart size={24} color="black" />
                </ButtonC>

                <ButtonF onClick={(e) => HandleAddFavorite(product, e)}>
                  <Heart
                    size={24}
                    fill={isFavorite ? '#ff4d4f' : 'none'}
                    color={isFavorite ? '#ff4d4f' : '#000000'}
                  />
                </ButtonF>
              </CardButtons>
            </Card>
          );
        })}
      </GridWrapper>
      <PaginationWrapper>
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Назад
        </PageButton>
      
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Вперед
        </PageButton>
      </PaginationWrapper>  
    </Container> </Section>
  );
};
