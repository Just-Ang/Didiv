import {  useNavigate, useSearchParams } from 'react-router-dom';
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
import { useEffect, useState } from 'react';

const OrderConfirmation = () => {
  const navigate = useNavigate();


  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId'); // Беремо ID з URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
 console.log(order)
useEffect(() => {
  console.log("Отриманий orderId з URL:", orderId);
    if (orderId) {
      // Завантажуємо дані замовлення з вашого Strapi за номером
      fetch(`${import.meta.env.VITE_API_URL}/api/orders?filters[order_number][$eq]=${orderId}&populate=*`)
        .then(res => res.json())
        .then(data => {
          if (data.data && data.data.length > 0) {
            setOrder(data.data[0]);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [orderId]);
  console.log(order)




  // if (!order) {
  //   return (
  //     <Container>
  //       <Message>Завантаження даних замовлення...</Message>
  //       <Button onClick={() => navigate('/')}>На головну</Button>
  //     </Container>
  //   );
  // }
if (loading) return <Container><Message>Завантаження...</Message></Container>;

if (!order) {
    return (
      <Container>
        <Message>Замовлення не знайдено або виникла помилка.</Message>
        <Button onClick={() => navigate('/')}>На головну</Button>
      </Container>
    );
  }


  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      
      <Message>
        Ваше замовлення <strong>№{order.order_number}</strong> успішно прийняте.
      </Message>
      <Message>
       Ми зв&rsquo;яжемось з Вами в найближчий час
      </Message>

      <OrderSummaryBox>
        <SummaryTitle>Деталі замовлення:</SummaryTitle>

        <List>
          {order.products?.map((item) => (
            <ListItem key={item.id}>
              <span className="item-info">
                {item.name} (x{item.quantity})
              </span>
              {/* <span className="item-price">
                {item.price * item.quantity} грн
              </span> */}
            </ListItem>
          ))}
        </List>

        <Message>
          <strong>Спосіб доставки:</strong> {order.deliveryMethod}
        </Message>
        <Message>
          <strong>Адреса отримання:</strong> {order.city}, {order.delivery_address}
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