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

export const ProductList = ({ category, selectedFilters = {} }) => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products?populate=*`)
      .then(res => res.json())
      .then(data =>  setProducts(data.data));
  }, []);
  console.log(products);
  let filteredProducts = products.filter((p) => p.category?.id_title === category);
  console.log(filteredProducts);
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

  Object.keys(selectedFilters).forEach((key) => {
    const value = selectedFilters[key];
    if (Array.isArray(value) && value.length > 0) {
      filteredProducts = filteredProducts.filter((p) => value.includes(p[key]));
    }
    // фільтруємо по range
    if (typeof value === 'string' || typeof value === 'number') {
      if (key === 'price') {
        filteredProducts = filteredProducts.filter(
          (p) => p.price <= Number(value)
        );
      }
    }
  });
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
                  <ShoppingCart size={24}
                  color='black'
                   />
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
