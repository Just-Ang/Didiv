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
  fetch(`${import.meta.env.VITE_API_URL}/api/products?populate=*`)
    .then((res) => res.json())
    .then((data) => {
      const allProducts = data.data;

      // Поточна дата
      const now = new Date();
      const oneDayAgo = new Date(now);
      oneDayAgo.setDate(now.getDate() - 1);
      //   const oneWeekAgo = new Date(now);
      // oneWeekAgo.setDate(now.getDate() - 7);

      // Фільтр товару за тиждень:
      //   const recentProducts = allProducts.filter(
      //   (product) => new Date(product.attributes.createdAt) >= oneWeekAgo
      // );
      const recentProducts = allProducts.filter(
        (product) => new Date(product.createdAt) >= oneDayAgo
      );

      setProducts(recentProducts);
    });
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
               src={`${import.meta.env.VITE_API_URL}${item.images?.[0].url}` || placeholder} 
                
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
