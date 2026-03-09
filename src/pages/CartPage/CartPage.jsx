import { Link } from 'react-router-dom';
import sprite from '../../img/symbol-defs.svg';
import {
  Breadcrumbs,
  BtnIcons,
  ButtonDelete,
  ButtonFavorite,
  CartItem,
  CartItemsList,
  ContentWrapper,
  Counter,
  CounterPrice,
  HeartIcon,
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
import { removeFromCart } from '../../redux/cartSlice';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { toast, ToastContainer } from 'react-toastify';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const productsInCart = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.items);
  const isCartEmpty = productsInCart.length === 0;
  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
    const exists = favorites.includes(product.id);
 console.log(product.id)
 console.log(favorites);
    dispatch(toggleFavorite(product.id));
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
                 const isFavorite = favorites.includes(item.id);
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
                      <HeartIcon   $active={isFavorite}>
                       
                        <use href={`${sprite}#icon-heart`} />
                      </HeartIcon>
                    </ButtonFavorite>
                    <ButtonDelete
                      onClick={() => handleDelete(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ccc',
                      }}
                    >
                      <HeartIcon>
                        {' '}
                        <use href={`${sprite}#icon-remove`} />
                      </HeartIcon>
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
                <span>Всього</span>
                <span>{total} грн </span>
              </SummaryRow>
              <OrderButton>Оформити замовлення</OrderButton>
            </SummaryCard>
          </ContentWrapper>
        </PageContainer>
      )}
    </>
  );
};

export default CartPage;
