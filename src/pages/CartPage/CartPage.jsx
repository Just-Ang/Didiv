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

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [removingIds, setRemovingIds] = useState([]);
     const reduxCartItems = useSelector((state) => state.cart.items);
  
    const [localCartItems,  setLocalCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

  // const cartItems = useSelector((state) => state.cart.items);

  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = localCartItems.reduce(
    (sum, item) => sum + (item.new_price ?? item.price) * (item.quantity || 1),
    0
  );

  const favorites = useSelector((state) => state.favorites.items);
  const isCartEmpty = localCartItems.length === 0;

 

useEffect(() => {
  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    // Якщо користувач НЕ авторизований —
    // беремо кошик з Redux
    if (!token || !user) {
      setLocalCartItems(reduxCartItems);
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

      const products = data.data
        .map((cartItem) => {
          if (!cartItem.product) return null;

          return {
            ...cartItem.product,
            quantity: cartItem.quantity,
          };
        })
        .filter(Boolean);

      setLocalCartItems(products);
            dispatch(setCartItems(products));

    } catch (error) {
      console.error(error);
      toast.error('Не вдалося завантажити кошик');

      // Якщо запит впав — залишаємо Redux
      setLocalCartItems(reduxCartItems);
    } finally {
      setLoading(false);
    }
  };

  fetchCart();

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const handleClickFavorite = (product, e) => {
    e.stopPropagation();
    const isFavorite = favorites.some((favItem) => favItem.id === product?.id);

    handleFavorite(product, isFavorite, dispatch, toast);
  };
  const handleDelete = (item) => {
    setRemovingIds((prev) => [...prev, item.id]);

    setTimeout(() => {
      dispatch(removeFromCart(item));
      setRemovingIds((prev) => prev.filter((id) => id !== item.id));
    }, 300);
  };
  const handleClear = () => {
    dispatch(clearCart());
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
              {localCartItems.map((item, index) => {
                console.log(item);
                const isFavorite = favorites.some((fav) => fav.id === item.id);
                const hasDiscount =
                  item.new_price && item.new_price < item.price;

                const finalPrice = hasDiscount ? item.new_price : item.price;

                const discountPercent = hasDiscount
                  ? Math.round(
                      ((item.price - item.new_price) / item.price) * 100
                    )
                  : 0;
                return (
                  <CartItem
                    key={`${item.id}-${index}`}
                    className={removingIds.includes(item.id) ? 'removing' : ''}
                    onClick={() => navigate(`/product/${item.slug ?? item.id}`)}
                  >
                    <ProductImg
                      src={item.images?.[0]?.url || '/nofoto.png'}
                      alt={item.name}
                      // onClick={() => navigate(`/product/${item.id}`)}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = placeholder;
                      }}
                    />
                    <ProductInfo>
                      <h3>{item.name}</h3>
                    </ProductInfo>
                    <CounterPrice>
                      <Counter
                        item={{ ...item, quantity: item.quantity || 1 }}
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
