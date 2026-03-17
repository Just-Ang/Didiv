import { Link } from 'react-router-dom';

import {
  Breadcrumbs,
  BtnIcons,
  ButtonDelete,
  ButtonFavorite,
  CartItem,
  CartItemsList,
  ClearButton,
  ContentWrapper,
  Counter,
  CounterPrice,
 
  OrderButton,
  PageContainer,
  PriceWrapper,
  ProductImg,
  ProductInfo,
  SummaryCard,
  SummaryRow,
  Title,
} from './CartPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/cartSlice';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { toast, ToastContainer } from 'react-toastify';
import { Heart, Trash2 } from 'lucide-react';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const productsInCart = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.items);
  console.log(favorites);
  const isCartEmpty = productsInCart.length === 0;
  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
    console.log(product)
   const exists = favorites.some((favItem) => favItem.id === product.id);

    dispatch(toggleFavorite(product));
    if (exists) {
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      toast.info(`${product.name} додано в обране`);
    }
  };
  const handleDelete = (item) => {
    console.log(item);
    dispatch(removeFromCart(item));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {isCartEmpty ? (
        <CartEmpty></CartEmpty>
      ) : (
        <PageContainer>
          <ToastContainer />
          <Breadcrumbs>
            {' '}
            <Link to="/">Головна</Link> / <Link to="/cart">Кошик</Link>
          </Breadcrumbs>
          <Title>Кошик</Title>

          <ContentWrapper>
            <CartItemsList>
              {cartItems.map((item, index) => { 
                 const isFavorite = favorites.some(fav => fav.id === item.id);
                 console.log(item.id)
                return (
                
                <CartItem key={`${item.id}-${index}`}>
                  <ProductImg src={item.image[0]} alt={item.name} />
                  <ProductInfo>
                    <h3>{item.name}</h3>
                  </ProductInfo>
                  <CounterPrice>
                    <Counter>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </Counter>
                    <PriceWrapper>
                      <div className="current-price">
                        {item.price.toLocaleString()}₴
                      </div>
                    </PriceWrapper>
                  </CounterPrice>
                  <BtnIcons>
                    <ButtonFavorite
                    
                     onClick={(e) => HandleAddFavorite(item, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ccc',
                      }}
                    >
                     
                       <Heart size={22}   fill={isFavorite ? "#ff4d4f" : "none"}
  color={isFavorite ? "#ff4d4f" : "#999"}/>
                    </ButtonFavorite>
                    <ButtonDelete
                      onClick={() => handleDelete(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000000',
                      }}
                    >
                       <Trash2 size={22} />
                    </ButtonDelete>
                  </BtnIcons>
                </CartItem>
              )})}
            </CartItemsList>

            <SummaryCard>
              <SummaryRow>
                <span>Номер замовлення</span>
                <span>789563678</span>
              </SummaryRow>

              <SummaryRow className="total">
                <span>Всього </span>
                <span> {total} грн </span>
              </SummaryRow>
              <OrderButton>Оформити замовлення</OrderButton>
               <ClearButton  onClick={handleClear}>Oчистити кошик</ClearButton>
            </SummaryCard>
            
          </ContentWrapper>
        </PageContainer>
      )}
    </>
  );
};

export default CartPage;
