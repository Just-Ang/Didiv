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
  ReservedBadgeFavorite,
  ImageWrapper,
} from './FavoritesPage.styled';
import placeholder from '../../../public/nofoto.png';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import FavEmpty from '../../components/FavEmpty/FavEmty';
import { addAllToCart, addToCart } from '../../redux/cartSlice';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CurrentPrice,
  DiscountBadge,
  OldPrice,
  PriceBlock,
  PriceWrapper,
} from '../CartPage/CartPage.styled';
import { handleFavorite } from '../../api/utils/handleFavorite';
import { BallTriangle } from 'react-loader-spinner';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxFavorites = useSelector((state) => state.favorites.items);

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const [removingIds, setRemovingIds] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));

      // Якщо користувач НЕ авторизований —
      // беремо обране з Redux
      if (!token || !user) {
        setFavorites(reduxFavorites);
        setLoading(false);
        return;
      }

      // Якщо авторизований —
      // беремо актуальні товари зі Strapi
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/favorites?filters[user][documentId][$eq]=${
            user.documentId
          }&populate[product][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Не вдалося отримати обране');
        }

        const data = await response.json();

        const products = data.data
          .map((favorite) => favorite.product)
          .filter(Boolean);

        setFavorites(products);
      } catch (error) {
        console.error(error);
        toast.error('Не вдалося завантажити обране');

        // Якщо запит впав — можемо залишити Redux
        setFavorites(reduxFavorites);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAllAdd = () => {
    const itemsToAdd = favorites
      .filter((item) => item.available !== false)
      .map((favItem) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem.id === favItem.id
        );

        const currentQuantity = cartItem?.quantity ?? 0;
        const stock = Number(favItem.stock ?? 0);
        const availableToAdd = stock - currentQuantity;

        if (availableToAdd <= 0) return null;

        return {
          ...favItem,
          quantity: availableToAdd,
        };
      })
      .filter(Boolean);

    console.log('itemsToAdd:', itemsToAdd);

    if (itemsToAdd.length === 0) {
      toast.error('Усі товари вже в максимальній кількості');
      return;
    }

    dispatch(addAllToCart(itemsToAdd));
    toast.success('Додано максимально доступну кількість товарів');
  };

  const total = favorites.reduce(
    (sum, item) => sum + (item.new_price ?? item.price) * (item.quantity || 1),
    0
  );

  // const handleClickFavorite = async (product, e) => {
  //    e.stopPropagation();
  //    const isFavorite = favorites.some((favItem) => favItem.id === product?.id);
  //  setTimeout(() => {
  //       setRemovingIds((prev) => prev.filter((id) => id !== product.id));
  //     }, 300);
  // const success = await handleFavorite(
  //     product,
  //     isFavorite,
  //     dispatch,
  //     toast
  //   );
  // console.log('success',success)
  //  };

  const handleClickFavorite = async (product, e) => {
    e.stopPropagation();

    const isFavorite = favorites.some(
      (favItem) => favItem.documentId === product.documentId
    );

    setRemovingIds((prev) => [...prev, product.id]);

    const success = await handleFavorite(product, isFavorite, dispatch, toast);

    if (success && isFavorite) {
      setTimeout(() => {
        setFavorites((prev) =>
          prev.filter((favItem) => favItem.documentId !== product.documentId)
        );

        setRemovingIds((prev) => prev.filter((id) => id !== product.id));
      }, 300);
    } else {
      setRemovingIds((prev) => prev.filter((id) => id !== product.id));
    }
  };

  // const handleDeleteAll = () => {
  //   dispatch(clearFavorite());
  // };
  // const handleDeleteAll = async () => {
  //   const token = localStorage.getItem("token");
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   // Якщо користувач не авторизований —
  //   // просто очищаємо Redux
  //   if (!token || !user) {
  //     dispatch(clearFavorite());
  //     return;
  //   }

  //   try {
  //     // Отримуємо всі favorites поточного користувача
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/favorites?filters[users][documentId][$eq]=${user.documentId}&populate=users`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Не вдалося отримати favorites");
  //     }

  //     const data = await response.json();

  //     // Для кожного Favorite прибираємо тільки поточного user
  //     await Promise.all(
  //       data.data.map(async (favorite) => {
  //         const users = favorite.users || [];

  //         const newUsers = users
  //           .filter((u) => u.documentId !== user.documentId)
  //           .map((u) => u.documentId);

  //         const updateResponse = await fetch(
  //           `${import.meta.env.VITE_API_URL}/api/favorites/${favorite.documentId}`,
  //           {
  //             method: "PUT",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${token}`,
  //             },
  //             body: JSON.stringify({
  //               data: {
  //                 users: newUsers,
  //               },
  //             }),
  //           }
  //         );

  //         if (!updateResponse.ok) {
  //           throw new Error(
  //             `Не вдалося оновити favorite ${favorite.documentId}`
  //           );
  //         }
  //       })
  //     );

  //     // Redux очищаємо тільки якщо бекенд успішно оновився
  //     dispatch(clearFavorite());

  //   } catch (error) {
  //     console.error("Помилка очищення favorites:", error);
  //     toast.error("Не вдалося очистити обране");
  //   }
  // };

  const isFavEmpty = favorites.length === 0;

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="var(--orange-color)"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

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
                    <ImageWrapper
                      onClick={() =>
                        navigate(`/product/${item.slug ?? item.id}`)
                      }
                    >
                      <Image
                        src={item.images?.[0]?.url || placeholder}
                        alt={item.name}
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

                        <IconButton
                          onClick={(e) => handleClickFavorite(item, e)}
                        >
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
              {/* <ClearButton onClick={handleDeleteAll}>
                Очистити обрані
              </ClearButton> */}
            </SummaryCard>
          </Layout>
        </Container>
      )}
    </>
  );
};

export default FavoritesPage;
