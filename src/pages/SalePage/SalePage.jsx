import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Section,
  Container,
  GridWrapper,
  Card,
  CardImg,
  CardTitle,
  CardBottom,
  CardButtons,
  Button,
  WrapperSort,
  Dropdown,
  Item,
  SortButton,
  Title,
  WrapperTop,
} from './SalePage.styled';
import {
    CatalogButton,
  PageButton,
  PaginationWrapper,
  WrapperNone,

} from '../NewProductsPage/NewProductsPage.styled';

import { ArrowDownNarrowWide, ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { BallTriangle } from 'react-loader-spinner';
import {
  CurrentPrice,
  DiscountBadge,
  OldPrice,
  PriceBlock,
  PriceWrapper,
} from '../CartPage/CartPage.styled';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toggleFavorite } from '../../redux/favoritesSlice';

const SalePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 24;
  console.log(isSortOpen)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);
const sortRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Якщо клікнули ПОЗА контейнером sortRef — закриваємо
      if (sortRef.current && !sortRef.current.contains(event.target)) {
         setIsSortOpen(false);
      }
    };

    // Вішаємо слухач подій на весь документ
    document.addEventListener('mousedown', handleClickOutside);

    // Прибираємо слухач при розмонтуванні компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const load = async () => {
      const API_URL = import.meta.env.VITE_API_URL;

      try {
        const res = await fetch(
          `${API_URL}/api/products?filters[new_price][$notNull]=true&pagination[pageSize]=500&populate=*`
        );

        const data = await res.json();
        console.log(data.data);

        setProducts(data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    switch (sortType) {
      case 'name':
        return arr.sort((a, b) =>
          sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );

      case 'price':
        return arr.sort((a, b) =>
          sortOrder === 'asc'
            ? a.new_price - b.new_price
            : b.new_price - a.new_price
        );

      case 'date':
        return arr.sort((a, b) =>
          sortOrder === 'asc'
            ? new Date(a.createdAt) - new Date(b.createdAt)
            : new Date(b.createdAt) - new Date(a.createdAt)
        );

      default:
        return arr;
    }
  }, [sortType, products, sortOrder]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();
    const exists = favorites.some((favItem) => favItem.id === product.id);

    dispatch(toggleFavorite(product));
    if (exists) {
      toast.warning(`${product.name} видалено з обраного`);
    } else {
      toast.info(`${product.name} додано в обране`);
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

   if (products.length === 0) {
      return (
        <WrapperNone
        >
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Нажаль, поки знижок немає
          </p>
          <CatalogButton to="/catalog">
                  <p>Весь каталог</p>
                 
                        <ArrowRight size={24} />
                   
                </CatalogButton>
        </WrapperNone>
      );
    }

  return (
    <Section>
      <Container>
          <ToastContainer autoClose={1500} />
          <WrapperTop>
              <Title>Акційні товари</Title>
        <WrapperSort ref={sortRef}>
          <SortButton onClick={() => setIsSortOpen((prev) => !prev)}>
            Сортування
            <ArrowDownNarrowWide strokeWidth={0.9} size={22} />
          </SortButton>

          {isSortOpen && (
            <Dropdown>
              <Item
                onClick={() => {
                  setSortType('name');
                  setSortOrder('asc');
                  setIsSortOpen(false);
                }}
              >
                А-Я
              </Item>

              <Item
                onClick={() => {
                  setSortType('name');
                  setSortOrder('desc');
                  setIsSortOpen(false);
                }}
              >
                Я-А
              </Item>

              <Item
                onClick={() => {
                  setSortType('price');
                  setSortOrder('asc');
                  setIsSortOpen(false);
                }}
              >
                Ціна ↑
              </Item>

              <Item
                onClick={() => {
                  setSortType('price');
                  setSortOrder('desc');
                  setIsSortOpen(false);
                }}
              >
                Ціна ↓
              </Item>

              <Item
                onClick={() => {
                  setSortType('date');
                  setSortOrder('desc');
                  setIsSortOpen(false);
                }}
              >
                Спочатку новіші
              </Item>
              <Item
                onClick={() => {
                  setSortType('date');
                  setSortOrder('asc');
                  setIsSortOpen(false);
                }}
              >
                Спочатку старіші
              </Item>
            </Dropdown>
          )}
        </WrapperSort>
            
          </WrapperTop>
      

        <GridWrapper>
          {currentProducts.map((item) => {
            const hasDiscount = item.new_price && item.new_price < item.price;

            const finalPrice = hasDiscount ? item.new_price : item.price;

            const discountPercent = hasDiscount
              ? Math.round(((item.price - item.new_price) / item.price) * 100)
              : 0;
            const isFavorite = favorites.some((fav) => fav.id === item.id);

            const inCart = cartItems.find((c) => c.id === item.id);
            const currentQty = inCart ? inCart.quantity : 0;
            const isOutOfStock = currentQty >= (item.stock || 0);

            const handleAdd = (product, e) => {
              e.stopPropagation();
              if (isOutOfStock) {
                toast.error(`Товар уже у кошику`);
                return;
              }
              dispatch(
                addToCart({
                  ...product,
                  quantity: 1,
                })
              );
              toast.success(`${product.name} додано в кошик!`);
            };
            return (
              <Card
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <CardImg src={item.images?.[0]?.url || '/nofoto.png'} />

                <CardTitle>{item.name}</CardTitle>

                <CardBottom>
                  <PriceWrapper>
                    <PriceBlock>
                      <CurrentPrice $discount={hasDiscount}>
                        {(finalPrice * (item.quantity || 1)).toLocaleString() +
                          '\u00A0грн'}
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

                  <CardButtons>
                    <Button onClick={(e) => handleAdd(item, e)}>
                      <ShoppingCart
                        size={24}
                        color={inCart ? 'var(--orange-color)' : 'black'}
                        // fill={inCart ? 'var(--orange-color)' : 'none'}
                        strokeWidth={inCart ? 2 : 2}
                      />
                    </Button>

                    <Button onClick={(e) => HandleAddFavorite(item, e)}>
                      <Heart
                        size={24}
                        fill={isFavorite ? '#ff4d4f' : 'none'}
                        color={isFavorite ? '#ff4d4f' : '#000000'}
                        strokeWidth={isFavorite ? 1 : 2}
                      />
                    </Button>
                  </CardButtons>
                </CardBottom>
              </Card>
            );
          })}
        </GridWrapper>
        {sortedProducts.length > itemsPerPage && (
          <PaginationWrapper>
            <PageButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Назад
            </PageButton>

            {Array.from({ length: totalPages }, (_, i) => (
              <PageButton
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                active={currentPage === i + 1}
              >
                {i + 1}
              </PageButton>
            ))}

            <PageButton
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Вперед
            </PageButton>
          </PaginationWrapper>
        )}
      </Container>
    </Section>
  );
};

export default SalePage;
