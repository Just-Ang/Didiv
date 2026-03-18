import { ShoppingCart, Trash2 } from 'lucide-react';
import {
  ActionsWrapper,
  Container,
  Layout,
  Breadcrumbs,
  CheckoutButton,
  IconButton,
  IconGroup,
  Image,
  ItemCard,
  ListContainer,
  Price,
  ProductName,
  SummaryCard,
  SummaryRow,
  Title,
  ClearButton,
} from './FavoritesPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearFavorite, toggleFavorite } from '../../redux/favoritesSlice';
import FavEmpty from '../../components/FavEmpty/FavEmty';
import { addAllToCart, addToCart } from '../../redux/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const [removingIds, setRemovingIds] = useState([]);
  const handleAdd = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} додано в кошик!`);
  };
  const handleAllAdd = () => {
    dispatch(addAllToCart(favorites));
    toast.success(`Товари додано в кошик!`);
  };

  console.log(favorites);
  const total = favorites.reduce((sum, item) => sum + item.price, 0);
  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
    const exists = favorites.some((favItem) => favItem.id === product.id);
    setRemovingIds((prev) => [...prev, product.id]);

    setTimeout(() => {
      dispatch(toggleFavorite(product));
      setRemovingIds((prev) => prev.filter((id) => id !== product.id));
    }, 300);

    if (exists) {
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      toast.info(`${product.name} додано в обране`);
    }
  };
  const handleDeleteAll = () => {
    dispatch(clearFavorite());
  };
  const isFavEmpty = favorites.length === 0;

  return (
    <>
      {isFavEmpty ? (
        <FavEmpty></FavEmpty>
      ) : (
        <Container>
          <ToastContainer />
          <Breadcrumbs>
            {' '}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Головна
            </Link>{' '}
            /{' '}
            <Link
              to="/favorite"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Обране
            </Link>
          </Breadcrumbs>
          <Title>Обране</Title>

          <Layout>
            <ListContainer>
              {favorites.map((item) => (
                <ItemCard
                  key={item.id}
                  className={removingIds.includes(item.id) ? 'removing' : ''}
                >
                  <Image src={item.image} alt={item.name} />
                  <ProductName>{item.name}</ProductName>

                  <ActionsWrapper>
                    <Price>{item.price} ₴</Price>
                    <IconGroup>
                      <IconButton onClick={() => handleAdd(item)}>
                        <ShoppingCart size={22} />
                      </IconButton>
                      <IconButton onClick={(e) => HandleAddFavorite(item, e)}>
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
                <strong>{total}₴</strong>
              </SummaryRow>
              <hr
                style={{
                  border: '0',
                  borderTop: '1px solid #eee',
                  margin: '20px 0',
                }}
              />
              <CheckoutButton onClick={() => handleAllAdd()}>
                Додати все до кошика
              </CheckoutButton>
              <ClearButton onClick={handleDeleteAll}>
                Очистити обрані
              </ClearButton>
            </SummaryCard>
          </Layout>
        </Container>
      )}
    </>
  );
};

export default FavoritesPage;
