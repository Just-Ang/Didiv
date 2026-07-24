import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import sprite from '../../img/symbol-defs.svg';

import {
  ActionRow,
  AddToCartBtn,

  AvailableRow,

  Breadcrumbs,
  Container,
  CurrentPrice,

  DescriptionText,
  DesktopWrapper,
  DiscountBadge,
  FavoriteButton,
  GallerySection,
  HeartIcon,
  InfoSection,
  MainImage,
  MainSection,
  NewLable,
  OldPrice,
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
  TitleSpecs,
  TooltipText,
  TooltipWrapper,
} from './ProductPage.styled';
import { toast, ToastContainer } from 'react-toastify';
import { toggleFavorite } from '../../redux/favoritesSlice';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom'; // Імпорт плагіна
import { ShoppingCart } from 'lucide-react';
import { BallTriangle } from 'react-loader-spinner';
import dayjs from 'dayjs';
import FAQSection from '../../components/FAQSection/FAQSection';

export const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  console.log('products', products);
  const [loading, setLoading] = useState(true);
  const product = products.find((p) => p.id === Number(id));
  const isNew = product
    ? dayjs().diff(dayjs(product.createdAt), 'day') < 7
    : false;
   

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      const update = () => setMatches(media.matches);

      update();
      media.addEventListener('change', update);

      return () => media.removeEventListener('change', update);
    }, [query]);

    return matches;
  };
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = product
    ? cartItems.find((item) => item.id === product.id)
    : null;

  const alreadyInCartQty = cartItem?.quantity || 0;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/products?filters[id][$eq]=${id}&populate=*`
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
  const isAvailable = product?.available ?? true;
    console.log(isAvailable);
  useEffect(() => {
    if (product && product.images) {
      setActiveImage(product.images?.[0]?.url);
    }
  }, [product]);

  const slides = (product?.images ?? []).map((img) => ({
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
    // якщо вже максимум
    if (alreadyInCartQty >= product.stock) {
      toast.warning('Товар вже в кошику (досягнуто максимум)');
      return;
    }

    // якщо додаємо більше ніж можна
    if (alreadyInCartQty + quantity > product.stock) {
      toast.warning(`Доступно лише ${product.stock} шт.`);
      return;
    }

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


const hasDiscount = product?.new_price && product?.new_price < product.price;

const discountPercent = hasDiscount
  ? Math.round(((product.price - product.new_price) / product.price) * 100)
  : 0;


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
            {(product.images ?? []).map((img) => {
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
            {isNew && <NewLable >● Новий товар</NewLable >}
          </RatingRow>
          {!isAvailable &&  <AvailableRow>● Заброньовано</AvailableRow>}
         

          <PriceCard>
           <PriceWrapper>
  {hasDiscount ? (
    <>
      <CurrentPrice $discount>
        {product.new_price.toLocaleString()} грн
      </CurrentPrice>

      <OldPrice>
        {product.price.toLocaleString()} грн
      </OldPrice>

      <DiscountBadge>
        -{discountPercent}%
      </DiscountBadge>
    </>
  ) : (
    <CurrentPrice>
      {product.price.toLocaleString()} грн
    </CurrentPrice>
  )}
</PriceWrapper>

            <ActionRow>
              <QuantitySelector>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <TooltipWrapper $active={quantity >= product.stock}>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>

                  <TooltipText>Максимум: {product.stock}</TooltipText>
                </TooltipWrapper>
              </QuantitySelector>

              <AddToCartBtn onClick={handleAdd}
               disabled={!isAvailable}>
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

        </InfoSection>
      </MainSection>
      {!isDesktop && (
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
            <TabButton
              active={activeTab === 'FAQ'}
              onClick={() => setActiveTab('FAQ')}
            >
              Питання та відповіді
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
            {activeTab === 'FAQ' && (
              <FAQSection
                productId={product.documentId}
                questions={product.questions}
              ></FAQSection>
            )}
          </TabContent>
        </TabsWrapper>
      )}
      {isDesktop && (
        <DesktopWrapper>
          {/* ЛІВА КОЛОНКА */}

          <TabsWrapper>
            <TabButtons>
              <TabButton
                active={activeTab === 'description'}
                onClick={() => setActiveTab('description')}
              >
                Опис
              </TabButton>

              <TabButton
                active={activeTab === 'FAQ'}
                onClick={() => setActiveTab('FAQ')}
              >
                Питання та відповіді
              </TabButton>
            </TabButtons>

            <TabContent>
              {activeTab === 'description' && (
                <DescriptionText>{product.description}</DescriptionText>
              )}

              {activeTab === 'FAQ' && (
                <FAQSection
                  productId={product.documentId}
                  questions={product.questions}
                />
              )}
            </TabContent>
          </TabsWrapper>

          {/* ПРАВА КОЛОНКА  */}
          <SpecsGrid>
            <TitleSpecs> Характеристики</TitleSpecs>
            
            {(() => {
  const allSpecs = [
    ...(product.attributes || []),
    ...(product.features || [])
  ];

  return allSpecs.length ? (
    allSpecs.map((spec, index) => (
      <SpecRow key={`${spec.id}-${index}`}>
        <span>{spec.label}</span>
        <b>{spec.value}</b>
      </SpecRow>
    ))
  ) : (
    <p>Характеристики відсутні</p>
  );
})()}
          </SpecsGrid>
        </DesktopWrapper>
      )}
    </Container>
  );
};
