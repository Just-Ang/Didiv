
import { Heart, Trash2, } from 'lucide-react';
import { ActionsWrapper,Container,  Layout, Breadcrumbs, CheckoutButton, IconButton, IconGroup, Image, ItemCard, ListContainer, Price, ProductInfo, ProductName, SummaryCard, SummaryRow, Title } from './FavoritesPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import FavEmpty from '../../components/FavEmpty/FavEmty';


const FavoritesPage = () => {
      const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    console.log(favorites);
    //  const total = favorites.reduce((sum, item) => sum + item.price, 0);
     const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
       const exists = favorites.some((favItem) => favItem.id === product.id);

    dispatch(toggleFavorite(product));
    dispatch(toggleFavorite(product.id));
    if (exists) {
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      toast.info(`${product.name} додано в обране`);
    }
  };
    const isFavEmpty = favorites.length === 0;

  return (
     <>
      {isFavEmpty ? (
       <FavEmpty></FavEmpty>
      ) : (
    <Container>
      <Breadcrumbs>Головна / Обране</Breadcrumbs>
      <Title>Обране</Title>

      <Layout>
        <ListContainer>
          {favorites.map((item) => (
            <ItemCard key={item.id}>
              <ProductInfo>
                <Image src={item.image} alt={item.name} />
                <ProductName>{item.name}</ProductName>
              </ProductInfo>

              <ActionsWrapper>
                <Price>{item.price} грн</Price>
                <IconGroup>
                  <IconButton  onClick={(e) => HandleAddFavorite(item, e)} >
                    <Heart size={22} fill="#ff4d4f" color="#ff4d4f" />
                  </IconButton>
                  <IconButton >
                    <Trash2 size={22} />
                  </IconButton>
                </IconGroup>
              </ActionsWrapper>
            </ItemCard>
          ))}
        </ListContainer>

        <SummaryCard>
          <SummaryRow>
            <span>Всього в обраному:</span>
            <strong>{favorites.length} шт.</strong>
            <span>На суму:</span>
            <span></span>
          </SummaryRow>
          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
          <CheckoutButton>Додати все до кошика</CheckoutButton>
        </SummaryCard>
      </Layout>
    </Container>
     )}
    </>
  );
};

export default FavoritesPage;