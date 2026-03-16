import { ActionButton, Breadcrumbs, CartImage, Container,  SubMessage,  } from "./FavEmpty.styled";

const FavEmpty = () => {
  return (
    <>
      <Breadcrumbs>Головна / Обране</Breadcrumbs>
      <Container>
        <CartImage
          src={import.meta.env.BASE_URL + 'sad.png'}
          alt="Порожній кошик" 
        />
       
        <SubMessage>Ви ще не додали жодного товару в обране</SubMessage>
        <ActionButton onClick={() => window.location.href = '/Didiv/catalog'}>
          Перейти до вибору
        </ActionButton>
      </Container>
    </>
  );
};
export default FavEmpty;