import {
  Button,
  Card,
  CardBottom,
  CardButtons,
  CardImg,
  CardPrice,
  CardTitle,
  ContainerProduct,
  Dropdown,
  GridWrapper,
  Item,
  NotFoundDiv,
  PageButton,
  PaginationWrapper,
  SortButton,
  TitleCategory,
  WrapperSort,
  WrapperTop,
} from './ProductList.styled';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import placeholder from '../../../public/nofoto.png';
import { ArrowDownNarrowWide, Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';


export const ProductList = ({
  setValues,
  category,
  selectedFilters = {},
  priceRange,
  sortType,
  setIsSortOpen,
  isSortOpen,
  setSortType,
  sortOrder,
  setSortOrder,

}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  let filteredProducts = products;
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

       const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(
    category
  )}&pagination[pageSize]=500`
);

        const data = await res.json();
        setProducts(data.data);

        const prices = data.data.map((p) => p.price);

        if (prices.length > 0) {
          let MIN = Math.min(...prices);
          let MAX = Math.max(...prices);

          setValues([MIN, MAX]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, setValues]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, selectedFilters, priceRange]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);

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

  Object.keys(selectedFilters).forEach((key) => {
    const value = selectedFilters[key];

    if (Array.isArray(value) && value.length > 0) {
      filteredProducts = filteredProducts.filter((p) => {
        const attr = p.attributes?.find(
          (a) => a.label.toLowerCase() === key.toLowerCase()
        );
        return attr && value.includes(attr.value);
      });
    }
  });

  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    console.log(minPrice, maxPrice);
   
  }


const sortedProducts = useMemo(() => {
const arr = [...filteredProducts];

 
  switch (sortType) {
    case "name":
      return arr.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );

    case "price":
      return arr.sort((a, b) =>
        sortOrder === "asc"
          ? a.price - b.price
          : b.price - a.price
      );

    case "date":
      return arr.sort((a, b) =>
        sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );

    default:
      return arr;
  }
}, [sortType, filteredProducts, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentProducts = sortedProducts.slice(
  indexOfFirstItem,
  indexOfLastItem
);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
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
  console.log(currentProducts);

  console.log('filteredProducts.length:', filteredProducts.length);
  console.log('currentProducts.length:', currentProducts.length);
 

  return (
    <ContainerProduct>
<WrapperTop>
  <TitleCategory>
  {category}
</TitleCategory>
 <WrapperSort>
      <SortButton onClick={() => setIsSortOpen(prev => !prev)}>
        Сортування
          <ArrowDownNarrowWide strokeWidth={0.9} size={22}/>
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

      <ToastContainer autoClose={1500} />
      {filteredProducts.length === 0 ? (
        <NotFoundDiv>
          <p
            style={{
              textAlign: 'center',
              fontSize: '30px',
              marginTop: '50px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Нічого не знайдено 😢
          </p>
        </NotFoundDiv>
      ) : (
        <GridWrapper>
          {currentProducts.map((product) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);

            const inCart = cartItems.find((c) => c.id === product.id);
            const currentQty = inCart ? inCart.quantity : 0;

            const isOutOfStock = currentQty >= (product.stock || 0);

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
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <CardImg
                 src={product.images?.[0]?.url || "/placeholder.jpg"}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = placeholder;
                  }}
                />
                <CardTitle>{product.name}</CardTitle>

                <CardBottom>
                  <CardPrice>{product.price} грн</CardPrice>
                  <CardButtons>
                    <Button onClick={(e) => handleAdd(product, e)}>
                      <ShoppingCart size={24} 
    color={inCart ? 'var(--orange-color)' : 'black'} 
  
    fill={inCart ? 'var(--orange-color)' : 'none'}
        strokeWidth={inCart ? 1 : 2}
/>
                    </Button>

                    <Button onClick={(e) => HandleAddFavorite(product, e)}>
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
      )}

      {filteredProducts.length > itemsPerPage && (
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
    </ContainerProduct>
  );
};
