
import { ActionButton, Section, Breadcrumbs, CartImage, Container, EmptyWripper, MessageTitle, SubMessage,  } from "./CartEmpty.styled";

const CartEmpty = () => {
  return (  
    <Section>
    <EmptyWripper>
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
  
    </EmptyWripper>
    </Section>
  );
};

export default CartEmpty;