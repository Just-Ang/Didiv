import { ShoppingCart, ArrowRight } from 'lucide-react';

import {
  AllNewButton,
  ArrowWrapper,
  ButtonContent,
  Container,
  Grid,
  IconButton,
  ImageLink,
  NewBadge,
  Price,
  PriceRow,
  ProductCard,
  ProductInfo,
  ProductName,
  Title,
} from './NewArrivals.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import placeholder from '../../../public/nofoto.png';
import { useEffect, useState } from 'react';

export const NewArrivals = () => {
  const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
  
useEffect(() => {
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);
  const isoDate = oneWeekAgo.toISOString();

  fetch(`${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[createdAt][$gte]=${isoDate}`)
    .then(res => res.json())
    .then(data => setProducts(data.data))
    .catch(err => console.error('Помилка завантаження нових товарів:', err));
}, []);

console.log(products);

  const displayProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const handleAdd = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success(`${product.name} додано в кошик!`);
  };
    if (!products || products.length === 0) return null;

  return (
    <Container>
      <ToastContainer />
      <Title>Нові товари</Title>
      <Grid>
        {displayProducts.map((item) => (
          <ProductCard key={item.id}>
            <ImageLink to={`/product/${item.id}`}>
              <NewBadge>Новинка</NewBadge>
              <img
               src={item.images?.[0].url || placeholder} 
                
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = placeholder;
                }}
              />
              <div className="overlay">
                {/* <OverlayText>Детальніше</OverlayText> */}
              </div>
            </ImageLink>

            <ProductInfo>
              <ProductName>{item.name}</ProductName>
              <PriceRow>
                <Price>{item.price} грн</Price>
                <IconButton onClick={() => handleAdd(item)}>
                  <ShoppingCart size={22} />
                </IconButton>
              </PriceRow>
            </ProductInfo>
          </ProductCard>
        ))}

        <AllNewButton to="/catalog/new">
          <ButtonContent>
            <p>Усі новинки</p>
            <ArrowWrapper>
              <ArrowRight size={24} />
            </ArrowWrapper>
          </ButtonContent>
        </AllNewButton>
      </Grid>
    </Container>
  );
};
