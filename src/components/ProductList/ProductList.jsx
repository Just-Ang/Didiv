import {
  Button,
  Card,
  CardButtons,
  CardImg,
  CardInfo,
  CardPrice,
  CardTitle,
  ContainerProduct,
  GridWrapper,
  NotFoundDiv,
  PageButton,
  PaginationWrapper,
} from './ProductList.styled';


import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import placeholder from '../../../public/nofoto.png';
import { Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const ProductList = ({ setValues, category, selectedFilters = {},  priceRange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products)

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 24;
let filteredProducts = products;



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/products?populate=*&filters[category][id_title][$eq]=${encodeURIComponent(
            category
          )}`
        );

        const data = await res.json();
        setProducts(data.data);

        const prices = data.data.map((p) => p.price);

        if (prices.length > 0) {
          let MIN = Math.min(...prices);
          let MAX = Math.max(...prices);
  //           if (MIN === MAX) {
  //   MAX = MIN + 1;
  // }

          // Оновлюємо стан для повзунка
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

  const handleAdd = (product, e) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success(`${product.name} додано в кошик!`);
  };
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
  

  // Фільтри по чекбоксам
  // Object.keys(selectedFilters).forEach((key) => {
  //   const value = selectedFilters[key];
  //   if (Array.isArray(value) && value.length > 0) {
  //     filteredProducts = filteredProducts.filter((p) => value.includes(p.attributes?.[key]));
  //   }
  // });
  Object.keys(selectedFilters).forEach((key) => {
  const value = selectedFilters[key];

  if (Array.isArray(value) && value.length > 0) {
    filteredProducts = filteredProducts.filter((p) => {
      const attr = p.attributes?.find((a) => a.label === key);

      return attr && value.includes(attr.value);
    });
  }
});


  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    console.log(minPrice, maxPrice)
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
  }
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
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

 

 
  return (
    <ContainerProduct>
      <ToastContainer autoClose={1500} />
      {filteredProducts.length === 0 ? (
        <NotFoundDiv>
  <p style={{ textAlign: 'center', fontSize:'30px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
    Нічого не знайдено 😢
  </p></NotFoundDiv>
) : (
      
      <GridWrapper>
        {currentProducts.map((product) => {
          const isFavorite = favorites.some((fav) => fav.id === product.id);
          return (
            <Card
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <CardImg
                src={product.images[0].url}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = placeholder;
                }}
              />
              <CardInfo>
                <CardTitle>{product.name}</CardTitle>
                <CardPrice>{product.price} грн</CardPrice>
                
              </CardInfo>

              <CardButtons>
                <Button onClick={(e) => handleAdd(product, e)}>
                  <ShoppingCart size={24} color="black" />
                </Button>

                <Button onClick={(e) => HandleAddFavorite(product, e)}>
                  <Heart
                    size={24}
                    fill={isFavorite ? '#ff4d4f' : 'none'}
                    color={isFavorite ? '#ff4d4f' : '#000000'}
                  />
                </Button>
              </CardButtons>
            </Card>
          );
        })}
      </GridWrapper>)}

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
