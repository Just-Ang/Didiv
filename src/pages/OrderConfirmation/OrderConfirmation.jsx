import {
  Button,
  Container,
  List,
  ListItem,
  Message,
  NextActions,
  OrderSummaryBox,
  SummaryTitle,
  Title,
} from './OrderConfirmation.styled';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const stateOrder = location.state?.order;
  const orderId = searchParams.get('orderId');

  const [order, setOrder] = useState(stateOrder || null);
  const [loading, setLoading] = useState(!stateOrder);
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
  //якщо є ордер
    if (stateOrder) return;

   //якщо немає
    if (orderId) {
      fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/orders?filters[order_number][$eq]=${orderId}&populate=*`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.data?.length > 0) {
            setOrder(data.data[0]);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [orderId, stateOrder]);


  const products = order?.products ?? [];

  const totalPrice = products.reduce((sum, item) => {
  return sum + Number(item.new_price ?? item.price) * (item.quantity || 1);
}, 0);

  if (loading) return <div>Завантаження...</div>;

  if (!order) {
    return (
      <div>
        Замовлення не знайдено
        <button onClick={() => navigate('/')}>На головну</button>
      </div>
    );
  }

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>

      <Message>
        Ваше замовлення <strong>№{order.order_number}</strong> успішно прийняте.
      </Message>
      <Message>Ми зв&rsquo;яжемось з Вами в найближчий час</Message>

      <OrderSummaryBox>
        <SummaryTitle>Деталі замовлення:</SummaryTitle>

        <List>
          {order.products?.map((item) => (
            <ListItem key={item.id}>
              <span className="item-info">
                {item.name} (x{item.quantity})
              </span>
             <span className="item-price">
  {(item.new_price ?? item.price) * (item.quantity || 1)} грн
</span>
            </ListItem>
          ))}
        </List>
        <Message>
          <strong>На суму:</strong> {totalPrice} грн.
        </Message>
        <Message>
          <strong>Отрмувач:</strong> {order.name}, {order.phone}.
        </Message>
        <Message>
          <strong>Спосіб доставки:</strong> {order.deliveryMethod}.
        </Message>
        <Message>
          <strong>Адреса отримання:</strong> {order.city},{' '}
          {order.delivery_address}.
        </Message>
        <Message>
          <strong>Спосіб оплати:</strong> {order.payment_method}.
        </Message>
      </OrderSummaryBox>

      <NextActions>
        <Button primary onClick={() => navigate('/')}>
          Повернутися на головну
        </Button>
        <Button onClick={() => navigate('/catalog')}>Продовжити покупки</Button>
      </NextActions>
    </Container>
  );
};

export default OrderConfirmation;
