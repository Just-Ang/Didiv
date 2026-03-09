import { ActionButton, Breadcrumbs, CartImage, Container, MessageTitle, SubMessage,  } from "./CartEmpty.styled";

const CartEmpty = () => {
  return (
    <>
      <Breadcrumbs>Головна / Кошик</Breadcrumbs>
      <Container>
        <CartImage
          src={import.meta.env.BASE_URL + 'empty-cart.png'}
          alt="Порожній кошик" 
        />
        <MessageTitle>Ваш кошик порожній</MessageTitle>
        <SubMessage>Ви ще не додали жодного товару в кошик</SubMessage>
        <ActionButton onClick={() => window.location.href = '/Didiv/catalog'}>
          Перейти до покупок
        </ActionButton>
      </Container>
    </>
  );
};

export default CartEmpty;