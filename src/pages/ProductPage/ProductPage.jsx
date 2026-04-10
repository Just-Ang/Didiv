import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import sprite from '../../img/symbol-defs.svg';
// import { products } from '../../data/products';
import {
  ActionRow,
  AddToCartBtn,
  Availability,
  Breadcrumbs,
  Container,
  CurrentPrice,
  DeliveryInfo,
  DescriptionText,
  FavoriteButton,
  GallerySection,
  HeartIcon,
  InfoSection,
  MainImage,
  MainSection,
  PriceCard,
  PriceWrapper,
  QuantitySelector,
  RatingRow,
  SpecRow,
  SpecsGrid,
  TabButton,
  TabButtons,
  TabContent,
  TabsWrapper,
  Thumb,
  Thumbnails,
  Title,
} from './ProductPage.styled';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom'; // Імпорт плагіна
import { ShoppingCart } from 'lucide-react';
import { BallTriangle } from 'react-loader-spinner';
import dayjs from 'dayjs';

export const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
console.log('products', products)
    const [loading, setLoading] = useState(true);
  const product = products.find((p) => p.id === Number(id));
  const isNew = product
  ? dayjs().diff(dayjs(product.createdAt), 'day') < 7
  : false;

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

     const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/products?filters[id][$eq]=${id}&populate=*`
);

      const data = await res.json();
      setProducts(data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [id]);
  console.log(product);
  useEffect(() => {
    if (product && product.images) {
      setActiveImage(product.images?.[0]?.url);
    }
  }, [product]);

  const slides = product?.images.map((img) => ({
    src: img.url,
  }));


  const handleMainImageClick = () => {
    const index = product.images.findIndex((img) => img.url === activeImage);
    setPhotoIndex(index >= 0 ? index : 0);
    setIsOpen(true);
  };

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((favItem) => favItem.id === product?.id);
  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`${product.name} додано в кошик!`);
  };
  const HandleAddFavorite = (product, e) => {
    e.stopPropagation();

    dispatch(toggleFavorite(product));

    if (isFavorite) {
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

  if (!product) {
    return <Container>Товар не знайдено</Container>;
  }

  return (
    <Container>
      {' '}
      <ToastContainer autoClose={1500} />
      <Breadcrumbs>
        <Link to="/">Головна</Link> / <Link to="/catalog">Каталог</Link> /{' '}
        {product.name}
      </Breadcrumbs>
      <MainSection>
        {/* Ліва колонка: Галерея */}
        <GallerySection>
          <MainImage
            src={activeImage}
            alt={product.name}
            onClick={handleMainImageClick}
          />
          <Thumbnails>
            {product.images.map((img) => {
              const imageUrl = img.url;

              return (
                <Thumb
                  key={img.id}
                  src={imageUrl}
                  onClick={() => setActiveImage(imageUrl)}
                  style={{
                    cursor: 'pointer',
                    opacity: activeImage === imageUrl ? 1 : 0.4,
                  }}
                />
              );
            })}
          </Thumbnails>
        </GallerySection>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          controller={{ closeOnBackdropClick: true }}
          on={{
            view: ({ index }) => {
              setPhotoIndex(index);
              if (product?.images?.[index]?.url) {
                setActiveImage(product.images[index].url);
              }
            },
          }}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickEnabled: true,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />

        {/* Права колонка: Інфо та покупка */}
        <InfoSection>
          <Title>{product.name}</Title>
          <RatingRow>
            {isNew && <Availability>● Новий товар</Availability>}
          </RatingRow>

          <PriceCard>
            <PriceWrapper>
              <CurrentPrice>{product.price.toLocaleString()} грн</CurrentPrice>
            </PriceWrapper>

            <ActionRow>
              <QuantitySelector>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </QuantitySelector>
              <AddToCartBtn onClick={handleAdd}>
                {' '}
                <ShoppingCart size={25} />
                <span>В&nbsp;КОШИК</span>
              </AddToCartBtn>

              <FavoriteButton
                $active={isFavorite}
                onClick={(e) => HandleAddFavorite(product, e)}
              >
                <HeartIcon $active={isFavorite}>
                  {' '}
                  <use href={`${sprite}#icon-heart`} />
                </HeartIcon>
                <span>В&nbsp;ОБРАНЕ</span>
              </FavoriteButton>
            </ActionRow>
          </PriceCard>

          <DeliveryInfo>
            <p>
              <strong>Ваше місто:</strong> Київ
            </p>
            <p>🚚 Доставка по Україні (Розрахувати вартість)</p>
          </DeliveryInfo>
        </InfoSection>
      </MainSection>
      <TabsWrapper>
        <TabButtons>
          <TabButton
            active={activeTab === 'description'}
            onClick={() => setActiveTab('description')}
          >
            Опис
          </TabButton>
          <TabButton
            active={activeTab === 'attributes'}
            onClick={() => setActiveTab('attributes')}
          >
            Характеристики
          </TabButton>
        </TabButtons>

        <TabContent>
          {activeTab === 'description' && (
            <DescriptionText>{product.description}</DescriptionText>
          )}
          {activeTab === 'attributes' && (
            <SpecsGrid>
  {product.attributes?.length ? (
    product.attributes.map((attr) => (
      <SpecRow key={attr.id}>
        <span>{attr.label}</span>
        <b>{attr.value}</b>
      </SpecRow>
    ))
  ) : (
    <p>Характеристики відсутні</p>
  )}
</SpecsGrid>
          )}
        </TabContent>
      </TabsWrapper>
    </Container>
  );
};
