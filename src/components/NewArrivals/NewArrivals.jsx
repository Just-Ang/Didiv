import { ShoppingCart, ArrowRight, } from 'lucide-react';
import {products} from '../../data/products'
import { AllNewButton, ArrowWrapper, ButtonContent, Container, Grid, IconButton, ImageLink,  NewBadge,  Price, PriceRow, ProductCard, ProductInfo, ProductName,  Title } from './NewArrivals.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import placeholder from '../../../public/nofoto.png';

export const NewArrivals = () => {
  const  dispatch =useDispatch();

  const displayProducts = products.slice(0, 3);
  const handleAdd = (product) => {
      dispatch(addToCart( { 
  ...product, 
  quantity: 1  
}));
      toast.success(`${product.name} додано в кошик!`);
    };

  return (
    <Container>
          <ToastContainer />
      <Title>Нові товари</Title>
      <Grid>
        {displayProducts.map((item) => (
          <ProductCard key={item.id}>
            <ImageLink to={`/product/${item.id}`}>
            <NewBadge>Новинка</NewBadge>
              <img src={item.image[0] || placeholder} alt={item.name} />
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
            <p>Весь каталог<br/>новинок</p>
            <ArrowWrapper>
              <ArrowRight size={24} />
            </ArrowWrapper>
          </ButtonContent>
        </AllNewButton>
      </Grid>
    </Container>
  );
};