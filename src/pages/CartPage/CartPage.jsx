import { Link } from 'react-router-dom';
import {
  Breadcrumbs,
  ButtonDelete,
  CartItem,
  CartItemsList,
  ContentWrapper,
  Counter,
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

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const productsInCart = useSelector(state => state.cart.items);
  console.log(productsInCart);
  const isCartEmpty = productsInCart.length === 0;

  const handleDelete = (item) => {
    console.log(item);
    dispatch(removeFromCart(item));
  };

  return (<>
  { isCartEmpty ? <CartEmpty></CartEmpty> :
    <PageContainer>
      <Breadcrumbs>
        {' '}
        <Link to="/">Головна</Link> / <Link to="/cart">Кошик</Link>
      </Breadcrumbs>
      <Title>Кошик</Title>

      <ContentWrapper>
        <CartItemsList>
          {cartItems.map((item, index) => (
            <CartItem key={`${item.id}-${index}`}>
              <ProductImg src={item.img} alt={item.name} />
              <ProductInfo>
                <h3>{item.name}</h3>
              </ProductInfo>
              <Counter>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </Counter>
              <PriceWrapper>
                <div className="current-price">
                  {item.price.toLocaleString()} ₴
                </div>
                {item.oldPrice && (
                  <div className="old-price">
                    {item.oldPrice.toLocaleString()} ₴
                  </div>
                )}
              </PriceWrapper>
              <ButtonDelete
                onClick={() => handleDelete(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ccc',
                }}
              >
                ✕
              </ButtonDelete>
            </CartItem>
          ))}
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
    </PageContainer> }
  </>);
};

export default CartPage;
