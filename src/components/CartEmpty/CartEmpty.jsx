import { ActionButton, Breadcrumbs, CartImage, Container, MessageTitle, SubMessage, Title } from "./CartEmpty.styled";

const CartEmpty = () => {
  return (
    <>
      <Breadcrumbs>Головна / Кошик</Breadcrumbs>
      <Container>
        <Title>Кошик</Title>
        <CartImage
          src="path-to-your-cart-image.png" 
          alt="Порожній кошик" 
        />
        <MessageTitle>Ваш кошик порожній</MessageTitle>
        <SubMessage>Ви ще не додали жодного товару в кошик</SubMessage>
        <ActionButton onClick={() => window.location.href = '/catalog'}>
          Перейти до покупок
        </ActionButton>
      </Container>
    </>
  );
};

export default CartEmpty;