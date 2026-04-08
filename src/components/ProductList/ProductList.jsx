import {
  Button,
  Card,
  CardButtons,
  CardImg,
  CardInfo,
  CardPrice,
  CardTitle,
  CardWeight,
  GridWrapper,
} from './ProductList.styled';
// import { products } from '../../data/products';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import placeholder from '../../../public/nofoto.png';
import { Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const ProductList = ({ values, setValues, category, selectedFilters = {},  priceRange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [values, setValues] = useState([]);
  console.log(values);

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

 
  // let filteredProducts = products.filter((p) => p.category?.id_title === category);

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
  let filteredProducts = products;

  // Фільтри по чекбоксам
  Object.keys(selectedFilters).forEach((key) => {
    const value = selectedFilters[key];
    if (Array.isArray(value) && value.length > 0) {
      filteredProducts = filteredProducts.filter((p) => value.includes(p[key]));
    }
  });

  // Фільтрація по ціні тільки якщо priceRange завантажений
  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    console.log(minPrice, maxPrice)
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
  }
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
      <ToastContainer autoClose={1500} />
      <GridWrapper>
        {filteredProducts.map((product) => {
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
                {product.weight && (
                  <CardWeight>{product.weight} грам</CardWeight>
                )}
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
      </GridWrapper>
    </>
  );
};
