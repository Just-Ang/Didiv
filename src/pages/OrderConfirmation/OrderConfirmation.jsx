import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  List,
  ListItem,
  Message,
  NextActions,
  OrderSummaryBox,
  PaymentInfo,
  SummaryTitle,
  Title,
} from './OrderConfirmation.styled';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <Container>
        <Message>Завантаження даних замовлення...</Message>
        <Button onClick={() => navigate('/')}>На головну</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      
      <Message>
        Ваше замовлення <strong>№{order.orderNumer}</strong> успішно прийняте.
      </Message>
      <Message>
        Наш менеджер зв’яжеться з вами протягом <strong>30 хвилин</strong>.
      </Message>

      <OrderSummaryBox>
        <SummaryTitle>Деталі замовлення:</SummaryTitle>

        <List>
          {order.items.map((item) => (
            <ListItem key={item.id}>
              <span className="item-info">
                {item.name} (x{item.quantity})
              </span>
              <span className="item-price">
                {item.price * item.quantity} грн
              </span>
            </ListItem>
          ))}
        </List>

        <Message>
          <strong>Спосіб доставки:</strong> {order.deliveryMethod}
        </Message>
        <Message>
          <strong>Адреса отримання:</strong> {order.city}, {order.address}
        </Message>
      </OrderSummaryBox>

      {order.paymentMethod === 'online' && (
        <PaymentInfo>
          <SummaryTitle>Оплата</SummaryTitle>
          <Message style={{marginBottom: '15px'}}>Натисніть кнопку нижче для миттєвої оплати:</Message>
          <Button primary onClick={() => (window.location.href = order.paymentLink)}>
            Оплатити зараз
          </Button>
        </PaymentInfo>
      )}

      <NextActions>
        <Button primary onClick={() => navigate('/')}>Повернутися на головну</Button>
        <Button onClick={() => navigate('/catalog')}>Продовжити покупки</Button>
      </NextActions>
    </Container>
  );
};

export default OrderConfirmation;