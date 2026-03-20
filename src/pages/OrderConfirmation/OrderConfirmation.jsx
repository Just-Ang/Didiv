
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, ListItem, Message, NextActions, OrderSummary, PaymentInfo, SummaryTitle, Title } from "./OrderConfirmation.styled";

const OrderConfirmation = () => {
      const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

  if (!order) return <Message>Завантаження даних замовлення...</Message>;

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      <Message>Ваше замовлення <strong>№{order.id}</strong> успішно прийняте.</Message>
      <Message>Наш менеджер зв’яжеться з вами протягом <strong>30 хвилин</strong>.</Message>

      <OrderSummary>
        <SummaryTitle>Деталі замовлення:</SummaryTitle>
        <ul>
          {order.items.map((item) => (
            <ListItem key={item.id}>
              {item.name} — Кількість: {item.quantity} — Сума: {item.price * item.quantity} грн
            </ListItem>
          ))}
        </ul>
        <Message>Спосіб доставки: <strong>{order.deliveryMethod}</strong></Message>
        <Message>Адреса отримання: {order.deliveryAddress}</Message>
      </OrderSummary>

      {order.paymentMethod === "online" && (
        <PaymentInfo>
          <SummaryTitle>Оплата</SummaryTitle>
          <Message>Натисніть кнопку нижче для оплати зараз:</Message>
          <Button onClick={() => window.location.href = order.paymentLink}>Оплатити зараз</Button>
        </PaymentInfo>
      )}

      <NextActions>
        <Button onClick={() => navigate("/")}>Повернутися на головну</Button>
        <Button onClick={() => navigate("/catalog")}>Продовжити покупки</Button>
      </NextActions>
    </Container>
  );
};

export default OrderConfirmation;