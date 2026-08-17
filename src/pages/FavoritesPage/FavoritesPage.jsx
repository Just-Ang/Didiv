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
  ProductName,
  SummaryCard,
  SummaryRow,
  Title,
  ClearButton,
  ReservedBadgeFavorite,
  ImageWrapper,
} from './FavoritesPage.styled';
import placeholder from '../../../public/nofoto.png';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearFavorite} from '../../redux/favoritesSlice';
import FavEmpty from '../../components/FavEmpty/FavEmty';
import { addAllToCart, addToCart } from '../../redux/cartSlice';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CurrentPrice,
  DiscountBadge,
  OldPrice,
  PriceBlock,
  PriceWrapper,
} from '../CartPage/CartPage.styled';
import { handleFavorite } from '../../api/utils/handleFavorite';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.items);
  console.log(favorites);
  const [removingIds, setRemovingIds] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);

  const handleAllAdd = () => {
    const itemsToAdd = favorites
      .filter((item) => item.available !== false)
      .map((favItem) => {
        const cartItem = cartItems.find((c) => c.id === favItem.id);
        const currentQuantity = cartItem ? cartItem.quantity : 0;

        const availableToAdd = favItem.stock - currentQuantity;

        if (availableToAdd <= 0) return null;

        return {
          ...favItem,
          quantity: availableToAdd, // додаємо тільки скільки можна
        };
      })
      .filter(Boolean);

    if (itemsToAdd.length === 0) {
      toast.error('Усі товари вже в максимальній кількості');
      return;
    }

    dispatch(addAllToCart(itemsToAdd));
    toast.success('Додано максимально доступну кількість товарів');
  };

  console.log(favorites);
  const total = favorites.reduce(
    (sum, item) => sum + (item.new_price ?? item.price) * (item.quantity || 1),
    0
  );
  // const HandleAddFavorite = (product, e) => {
  //   e.stopPropagation();
  //   const exists = favorites.some((favItem) => favItem.id === product.id);
  //   setRemovingIds((prev) => [...prev, product.id]);

  //   setTimeout(() => {
  //     dispatch(toggleFavorite(product));
  //     setRemovingIds((prev) => prev.filter((id) => id !== product.id));
  //   }, 300);

  //   if (exists) {
  //     toast.warning(`${product.name} видалено з обраного`);
  //   } else {
  //     toast.info(`${product.name} додано в обране`);
  //   }
  // };
const handleClickFavorite = (product, e) => {
   e.stopPropagation();
   const isFavorite = favorites.some((favItem) => favItem.id === product?.id);
 setTimeout(() => {
      setRemovingIds((prev) => prev.filter((id) => id !== product.id));
    }, 300);
   handleFavorite(product, isFavorite, dispatch, toast);
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
          <ToastContainer autoClose={1500} />
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
              {favorites.map((item) => {
                const hasDiscount =
                  item.new_price && item.new_price < item.price;

                const finalPrice = hasDiscount ? item.new_price : item.price;
                const isAvailable = item?.available ?? true;

                const discountPercent = hasDiscount
                  ? Math.round(
                      ((item.price - item.new_price) / item.price) * 100
                    )
                  : 0;

                const handleAdd = (item) => {
                  const itemInCart = cartItems.find(
                    (cartItem) => cartItem.id === item.id
                  );

                  const currentQuantity = itemInCart ? itemInCart.quantity : 0;

                  if (currentQuantity >= item.stock) {
                    toast.error(`Вибачте, доступно лише ${item.stock} шт.`);
                    return;
                  }

                  dispatch(addToCart(item));
                  toast.success(`${item.name} додано в кошик!`);
                };

                return (
                  <ItemCard
                    key={item.id}
                    className={removingIds.includes(item.id) ? 'removing' : ''}
                  >
                    {!isAvailable && (
                      <ReservedBadgeFavorite>
                        Заброньовано
                      </ReservedBadgeFavorite>
                    )}
                    <ImageWrapper>
                      <Image
                        src={item.images?.[0]?.url || placeholder}
                        alt={item.name}
                        onClick={() => navigate(`/product/${item.id}`)}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                    
                        }}
                      />
                    </ImageWrapper>
                    <ProductName>{item.name}</ProductName>

                    <ActionsWrapper>
                      {/* <Price>{item.price}&nbsp;грн</Price> */}
                      <PriceWrapper>
                        <PriceBlock>
                          <CurrentPrice $discount={hasDiscount}>
                            {(
                              finalPrice * (item.quantity || 1)
                            ).toLocaleString()}{' '}
                            грн
                          </CurrentPrice>

                          {hasDiscount && (
                            <>
                              <OldPrice>
                                {(
                                  item.price * (item.quantity || 1)
                                ).toLocaleString()}{' '}
                                грн
                              </OldPrice>

                              <DiscountBadge>-{discountPercent}%</DiscountBadge>
                            </>
                          )}
                        </PriceBlock>
                      </PriceWrapper>
                      <IconGroup>
                        {
                          <IconButton
                            onClick={() => handleAdd(item)}
                            // disabled={isMax || item.stock === 0}
                            disabled={!isAvailable}
                          >
                            <ShoppingCart size={30} />
                          </IconButton>
                        }

                        <IconButton onClick={(e) =>  handleClickFavorite(item, e)}>
                          <Trash2 size={30} />
                        </IconButton>
                      </IconGroup>
                    </ActionsWrapper>
                  </ItemCard>
                );
              })}
            </ListContainer>

            <SummaryCard>
              <SummaryRow>
                <span>Всього в обраному:</span>
                <strong>{favorites.length} шт.</strong>
                <span>На суму:</span>
                <strong>{total} грн</strong>
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
