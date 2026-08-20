import { ShoppingCart, ArrowRight, Heart } from 'lucide-react';

import {
  AllNewButton,
  ArrowWrapper,
  ButtonContent,
  Container,
  Grid,
  ImageLink,
  NewBadge,
  PriceRow,
  ProductCard,
  ProductInfo,
  ProductName,
  ReservedBadge,
  Title,
} from './NewArrivals.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import placeholder from '../../../public/nofoto.png';
import { useEffect, useState } from 'react';
import {
  Button,
  CardButtons,
  CurrentPrice,
  DiscountBadge,
  OldPrice,
  PriceBlock,
  PriceWrapper,

} from '../ProductList/ProductList.styled';

import { handleFavorite } from '../../api/utils/handleFavorite';
import { useNavigate } from 'react-router-dom';
import { handleCart } from '../../api/utils/handleCart';

export const NewArrivals = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    const isoDate = oneWeekAgo.toISOString();

    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/api/products?populate=*&filters[createdAt][$gte]=${isoDate}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) =>
        console.error('Помилка завантаження нових товарів:', err)
      );
  }, []);

  const handleClickFavorite = (product, e) => {
    e.stopPropagation();
    const isFavorite = favorites.some((favItem) => favItem.id === product?.id);

    handleFavorite(product, isFavorite, dispatch, toast);
  };

  const displayProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (!products || products.length === 0) return null;

  return (
    <Container>
      <ToastContainer />
      <Title>Нові товари</Title>
      <Grid>
        {displayProducts.map((item) => {
          const isFavorite = favorites.some((fav) => fav.id === item.id);
const isAvailable = item?.available ?? true;
console.log({
  name: item.name,
  available: item.available,
  isAvailable,
});
          const inCart = cartItems.find((c) => c.id === item.id);
          const currentQty = inCart ? inCart.quantity : 0;

          const isOutOfStock = currentQty >= (item.stock || 0);
          const hasDiscount = item.new_price && item.new_price < item.price;

          const finalPrice = hasDiscount ? item.new_price : item.price;

          const discountPercent = hasDiscount
            ? Math.round(((item.price - item.new_price) / item.price) * 100)
            : 0;
          const handleAdd = async () => {
            if (isOutOfStock) {
              toast.warning('Товар вже в кошику (досягнуто максимум)');
              return;
            }

            if (isOutOfStock) {
              toast.warning(`Доступно лише ${item.stock} шт.`);
              return;
            }

            await handleCart(item, 1, dispatch, toast);
          };
          return (
            <ProductCard
              key={item.id}
              onClick={() => navigate(`/product/${item.slug ?? item.id}`)}
            >
                             
              
              <ImageLink>
                <NewBadge>Новинка</NewBadge>
                  {!isAvailable && <ReservedBadge>Бронь</ReservedBadge>}
                <img
                  src={item.images?.[0].url || placeholder}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = placeholder;
                  }}
                />
                <div className="overlay">
                  {/* <OverlayText>Детальніше</OverlayText> */}
                </div>
              </ImageLink>

              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <PriceRow>
                  <PriceWrapper>
                    <PriceBlock>
                      <CurrentPrice $discount={hasDiscount}>
                        {finalPrice.toLocaleString()}&#160;грн
                      </CurrentPrice>

                      {hasDiscount && (
                        <OldPrice>
                          {item.price.toLocaleString()}&#160;грн
                        </OldPrice>
                      )}

                      {hasDiscount && (
                        <DiscountBadge>-{discountPercent}%</DiscountBadge>
                      )}
                    </PriceBlock>
                  </PriceWrapper>

                  <CardButtons>
                    {isAvailable && <Button onClick={(e) => handleAdd(item, e)}>
                      <ShoppingCart
                        size={24}
                        color={inCart ? 'var(--orange-color)' : 'black'}
                        strokeWidth={inCart ? 2 : 2}
                      />
                    </Button>}

                    <Button onClick={(e) => handleClickFavorite(item, e)}>
                      <Heart
                        size={24}
                        fill={isFavorite ? '#ff4d4f' : 'none'}
                        color={isFavorite ? '#ff4d4f' : '#000000'}
                        strokeWidth={isFavorite ? 1 : 2}
                      />
                    </Button>
                  </CardButtons>
                </PriceRow>
              </ProductInfo>
            </ProductCard>
          );
        })}

        <AllNewButton to="/catalog/new">
          <ButtonContent>
            <p>Усі новинки</p>
            <ArrowWrapper>
              <ArrowRight size={24} />
            </ArrowWrapper>
          </ButtonContent>
        </AllNewButton>
      </Grid>
    </Container>
  );
};
