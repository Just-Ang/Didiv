import { useEffect, useMemo, useRef, useState } from 'react';
import {
  GridWrapper,
  Card,
  CardImg,
  CardTitle,

  CardButtons,
  CardBottom,
  WrapperSort,
  SortButton,
  Dropdown,
  Item,
  WrapperTop,
  CatalogButton,
  WrapperNone,
} from './NewProductsPage.styled';
import { useNavigate } from 'react-router-dom';
import { ArrowDownNarrowWide, ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import { TitleNew } from './NewProductsPage.styled';
import { Container } from './NewProductsPage.styled';
import { Section } from './NewProductsPage.styled';

import { BallTriangle } from 'react-loader-spinner';
import { PaginationWrapper } from './NewProductsPage.styled';
import { PageButton } from './NewProductsPage.styled';
import placeholder from '../../../public/nofoto.png';
import { CurrentPrice, DiscountBadge, OldPrice, PriceBlock, PriceWrapper } from '../CartPage/CartPage.styled';
import { Button, } from '../SalePage/SalePage.styled';
import { NewBadge, ReservedBadge } from '../../components/ProductList/ProductList.styled';
import { handleFavorite } from '../../api/utils/handleFavorite';
import { handleCart } from '../../api/utils/handleCart';
export const NewProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc'); // asc | desc

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const sortRef = useRef(null); 
  
    useEffect(() => {
      const handleClickOutside = (event) => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  useEffect(() => {
    const fetchProducts = async () => {
      const now = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      const isoDate = oneWeekAgo.toISOString();

      try {
        setLoading(true);
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/products?populate=*&filters[createdAt][$gte]=${isoDate}&pagination[page]=${currentPage}&pagination[pageSize]=24`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        setProducts(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    const getFinalPrice = (product) => {
    if (product.new_price && product.new_price < product.price) {
      return product.new_price;
    }
    return product.price;
  };

    switch (sortType) {
      case 'name':
        return arr.sort((a, b) =>
          sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );

      case "price":
      return arr.sort((a, b) => {
   
        const priceA = getFinalPrice(a);
        const priceB = getFinalPrice(b);


        return sortOrder === "asc" 
          ? priceA - priceB 
          : priceB - priceA;
      });

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


 const handleClickFavorite = (product, e) => {
   e.stopPropagation();
   const isFavorite = favorites.some((favItem) => favItem.id === product?.id);
 
   handleFavorite(product, isFavorite, dispatch, toast);
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

  if (sortedProducts.length === 0) {
    return (
      <WrapperNone
      >
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Нажаль, нічого нового за останній тиждень
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
          <TitleNew>Нові товари </TitleNew>
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
          {sortedProducts.map((product) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);

            // const inCart = cartItems.find((c) => c.id === product.id);
            // const currentQty = inCart ? inCart.quantity : 0;
            // const isMaxReached = currentQty >= product.stock;
             const isAvailable = product?.available ?? true;
          

            const inCart = cartItems.find((c) => c.id === product.id);
            const currentQty = inCart ? inCart.quantity : 0;

            const isOutOfStock = currentQty >= (product.stock || 0);
             const hasDiscount = product.new_price && product.new_price < product.price;

            const finalPrice = hasDiscount ? product.new_price : product.price;

            const discountPercent = hasDiscount
              ? Math.round(((product.price - product.new_price) / product.price) * 100)
              : 0;

               const handleAdd = async (product, e) => {
                                        e.stopPropagation();
                                        if (isOutOfStock) {
                                          toast.error(`Товар уже у кошику`);
                                          return;
                                        }
                                        await handleCart(
                                                       product,
                                                       1,
                                                       dispatch,
                                                       toast
                                                     );
                                      };

            return (
              <Card
                key={product.id}
                onClick={() => navigate(`/product/${product.slug ?? product.id}`)}
              >
                 {!isAvailable && <ReservedBadge>Бронь</ReservedBadge>}
                 <NewBadge>Новинка</NewBadge>
                <CardImg src={product.images?.[0]?.url || placeholder} alt={product.name} />
                <CardTitle>{product.name}</CardTitle>

                <CardBottom>
                        <PriceWrapper>
  <PriceBlock>
    <CurrentPrice $discount={hasDiscount}>
      {finalPrice.toLocaleString()}&#160;грн
    </CurrentPrice>

    {hasDiscount && (
      <OldPrice>
        {product.price.toLocaleString()}&#160;грн
      </OldPrice>
    )}

    {hasDiscount && (
      <DiscountBadge>-{discountPercent}%</DiscountBadge>
    )}
  </PriceBlock>
</PriceWrapper>
                 <CardButtons>
                                                       {isAvailable && (
                                                        <Button onClick={(e) => handleAdd(product, e)}>
                                                         <ShoppingCart size={24} 
                                       color={inCart ? 'var(--orange-color)' : 'black'} 
                                     
          
                                           strokeWidth={inCart ? 2 : 2}
                                   />
                                                       </Button>
                                                       )}
                                   
                                                       <Button onClick={(e) => handleClickFavorite(product, e)}>
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
      </Container>{' '}
    </Section>
  );
};
