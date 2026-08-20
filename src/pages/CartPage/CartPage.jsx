import { Link, useNavigate } from 'react-router-dom';

import {
  Breadcrumbs,
  BtnIcons,
  ButtonDelete,
  ButtonFavorite,
  CartItem,
  CartItemsList,
  ClearButton,
  ContentWrapper,
  CounterPrice,
  CurrentPrice,
  DiscountBadge,
  OldPrice,
  OrderButton,
  PageContainer,
  PriceBlock,
  PriceWrapper,
  ProductImg,
  ProductInfo,
  SummaryCard,
  SummaryRow,
  Title,
} from './CartPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, setCartItems } from '../../redux/cartSlice';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { toast, ToastContainer } from 'react-toastify';
import { Heart, Trash2 } from 'lucide-react';
import Counter from '../../components/Counter/Counter';
import { useEffect, useState } from 'react';
import placeholder from '../../../public/nofoto.png';
import { handleFavorite } from '../../api/utils/handleFavorite';
import { BallTriangle } from 'react-loader-spinner';
import { clearCartFromBackend } from '../../api/utils/clearCartFromBackend';
import { ImgWrapper } from '../../components/ProductList/ProductList.styled';
import { ReservedBadgeFavorite } from '../FavoritesPage/FavoritesPage.styled';
import { deleteCartItemFromBackend } from '../../api/utils/deleteCartItemFromBackend';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const [removingIds, setRemovingIds] = useState([]);
  const reduxCartItems = useSelector((state) => state.cart.items);

  const [localCartItemsProduct, setLocalCartItemsProduct] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  console.log('cartItems',cartItems);

  const [loading, setLoading] = useState(true);
console.log('localCartItems',localCartItemsProduct)

const totalQuantity = reduxCartItems
  .filter((item) => item.available !== false)
  .reduce((sum, item) => sum + item.quantity, 0);

const total = reduxCartItems
  .filter((item) => item.available !== false)
  .reduce(
    (sum, item) =>
      sum + (item.new_price ?? item.price) * (item.quantity || 1),
    0
  );

  const favorites = useSelector((state) => state.favorites.items);
  const isCartEmpty = localCartItemsProduct.length === 0;

  useEffect(() => {
    const fetchCart = async () => {
      // Якщо користувач НЕ авторизований —
      // беремо кошик з Redux
      if (!token || !user) {
        setLocalCartItemsProduct(reduxCartItems);
        setLoading(false);
        return;
      }

      // Якщо авторизований —
      // беремо актуальний кошик зі Strapi
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/cart-items?filters[user][documentId][$eq]=${
            user.documentId
          }&populate[product][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Не вдалося отримати кошик');
        }

        const data = await response.json();
setCartItem(data.data);
        const products = data.data
          .map((cartItem) => {
            if (!cartItem.product) return null;

            return {
              ...cartItem.product,
              quantity: cartItem.quantity,
            };
          })
          .filter(Boolean);

        setLocalCartItemsProduct(products);
        dispatch(setCartItems(products));
      } catch (error) {
        console.error(error);
        toast.error('Не вдалося завантажити кошик');

        // Якщо запит впав — залишаємо Redux
        setLocalCartItemsProduct(reduxCartItems);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  setLocalCartItemsProduct(reduxCartItems);
}, [reduxCartItems]);

  const handleClickFavorite = (product, e) => {
    e.stopPropagation();
    const isFavorite = favorites.some((favItem) => favItem.id === product?.id);

    handleFavorite(product, isFavorite, dispatch, toast);
  };
const handleDelete = async (item) => {
  setRemovingIds((prev) => [...prev, item.id]);

  try {
    if (!user) {
      setTimeout(() => {
        dispatch(removeFromCart(item));

        setRemovingIds((prev) =>
          prev.filter((id) => id !== item.id)
        );
      }, 300);

      return;
    }

    await deleteCartItemFromBackend(item, user.id, dispatch, token);

    setTimeout(() => {
      setRemovingIds((prev) =>
        prev.filter((id) => id !== item.id)
      );
    }, 300);
  } catch (error) {
    setRemovingIds((prev) =>
      prev.filter((id) => id !== item.id)
    );

    toast.error('Не вдалося видалити товар з кошика');
  }
};



  const handleClear = async () => {
    if (!user) {
      dispatch(clearCart());
      setLocalCartItemsProduct([]);
      return;
    }

    try {
      await clearCartFromBackend(user.id, dispatch, token);
      setLocalCartItemsProduct([]);
    } catch (error) {
      toast.error('Не вдалося очистити кошик');
    }
  };

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
      {isCartEmpty ? (
        <CartEmpty></CartEmpty>
      ) : (
        <PageContainer>
          <ToastContainer autoClose={1500} />
          <Breadcrumbs>
            {' '}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Головна
            </Link>{' '}
            /{' '}
            <Link
              to="/cart"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Кошик
            </Link>
          </Breadcrumbs>
          <Title>Кошик</Title>

          <ContentWrapper>
            <CartItemsList>
              {localCartItemsProduct.map((item, index) => {
                  const cartItem = cartItems.find(
  (cartItem) => cartItem.product?.documentId === item.documentId
);

                const isFavorite = favorites.some((fav) => fav.id === item.id);
                const hasDiscount =
                  item.new_price && item.new_price < item.price;
                const isAvailable = item?.available ?? true;

                const finalPrice = hasDiscount ? item.new_price : item.price;

                const discountPercent = hasDiscount
                  ? Math.round(
                      ((item.price - item.new_price) / item.price) * 100
                    )
                  : 0;
                return (
                  <CartItem
                    key={`${item.id}-${index}`}
                    className={`
    ${removingIds.includes(item.id) ? 'removing' : ''}
    ${!isAvailable ? 'unavailable' : ''}
  `}
                 
                  >
                    <ImgWrapper    onClick={() => navigate(`/product/${item.slug ?? item.id}`)}>
                      {!isAvailable && (
                        <ReservedBadgeFavorite>Бронь</ReservedBadgeFavorite>
                      )}
                      <ProductImg
                        src={item.images?.[0]?.url || '/nofoto.png'}
                        alt={item.name}
                        // onClick={() => navigate(`/product/${item.id}`)}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = placeholder;
                        }}
                      />
                    </ImgWrapper>
                    <ProductInfo    onClick={() => navigate(`/product/${item.slug ?? item.id}`)}>
                      <h3>{item.name}</h3>
                    </ProductInfo>
                    <CounterPrice>
                   <Counter
  item={item}
  cartItem={cartItem}
  user={user}
  token={token}
/>
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
                    </CounterPrice>
                    <BtnIcons>
                      <ButtonFavorite
                        onClick={(e) => handleClickFavorite(item, e)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#ccc',
                        }}
                      >
                        <Heart
                          size={22}
                          fill={isFavorite ? '#ff4d4f' : 'none'}
                          color={isFavorite ? '#ff4d4f' : '#999'}
                        />
                      </ButtonFavorite>
                      <ButtonDelete
                        onClick={() => handleDelete(item)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#000000',
                        }}
                      >
                        <Trash2 size={22} />
                      </ButtonDelete>
                    </BtnIcons>
                  </CartItem>
                );
              })}
            </CartItemsList>

            <SummaryCard>
              <SummaryRow>
                <span>Всього в обраному:</span>
                <strong>{totalQuantity} шт.</strong>
                <span>На суму:</span>
                <strong>{total} грн</strong>
              </SummaryRow>
              <OrderButton to="/checkout">Оформити замовлення</OrderButton>
              <ClearButton onClick={handleClear}>Oчистити кошик</ClearButton>
            </SummaryCard>
          </ContentWrapper>
        </PageContainer>
      )}
    </>
  );
};

export default CartPage;
