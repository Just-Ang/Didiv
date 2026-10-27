import { Link } from "react-router-dom";
import { ActionButton, Breadcrumbs, CartImage, Container,  SubMessage,  } from "./FavEmpty.styled";

const FavEmpty = () => {
  return (
    <>
      <Breadcrumbs>
              <Link to="/">Головна</Link> / <Link to="/favorite">Обране</Link> {' '}
             
            </Breadcrumbs>
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