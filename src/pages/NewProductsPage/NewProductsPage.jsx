import { useEffect, useState } from 'react';
import {
  Wrapper,
  GridWrapper,
  Card,
  CardImg,
  CardInfo,
  CardTitle,
  CardPrice,
  CardButtons,
  Button,
} from './NewProductsPage.styled';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import { TitleNew } from './NewProductsPage.styled';
export const NewProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      .then((data) => setProducts(data.data));
  }, []);

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

  return (
    <Wrapper>
        <ToastContainer autoClose={1500} />
      <TitleNew>Нові товари</TitleNew>
      <GridWrapper>
        {products.map((product) => {
          const isFavorite = favorites.some((fav) => fav.id === product.id);

          return (
            <Card
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardImg src={product.images?.[0]?.url} alt={product.name} />
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
      </GridWrapper>
    </Wrapper>
  );
};
