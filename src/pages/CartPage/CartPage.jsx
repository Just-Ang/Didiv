import { Link } from 'react-router-dom';
import {
  Breadcrumbs,
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
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <PageContainer>
      <Breadcrumbs>
        {' '}
        <Link to="/">Головна</Link> / <Link to="/cart">Кошик</Link>
      </Breadcrumbs>
      <Title>Кошик</Title>

      <ContentWrapper>
        <CartItemsList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
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
                  {item.price.toLocaleString()} ₽
                </div>
                {item.oldPrice && (
                  <div className="old-price">
                    {item.oldPrice.toLocaleString()} ₽
                  </div>
                )}
              </PriceWrapper>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ccc',
                }}
              >
                ✕
              </button>
            </CartItem>
          ))}
        </CartItemsList>

        <SummaryCard>
          <SummaryRow>
            <span>Номер замовлення</span>
            <span>789563678</span>
          </SummaryRow>
          <SummaryRow>
            <span>Вартість замовлення</span>
            <span>692 </span>
          </SummaryRow>

          <SummaryRow className="total">
            <span>Всього</span>
            <span>605 370 ₽</span>
          </SummaryRow>
          <OrderButton>Оформити замовлення</OrderButton>
        </SummaryCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CartPage;
