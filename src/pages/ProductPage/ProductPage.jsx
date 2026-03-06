import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

import { products } from "../../data/products";
import { ActionRow, AddToCartBtn, Availability, Breadcrumbs, Container, CurrentPrice, DeliveryInfo, DescriptionText, GallerySection, InfoSection, MainImage, MainSection, OldPrice, PriceCard, PriceWrapper, QuantitySelector, RatingRow, SpecItem, SpecsGrid,   TabButton, TabButtons, TabContent,  TabsWrapper, Thumb, Thumbnails, Title } from "./ProductPage.styled";
import { toast, ToastContainer } from "react-toastify";

export const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
   const [activeImage, setActiveImage] = useState(product.image[0]);
   const dispatch = useDispatch();

const handleAdd = () => {
  dispatch(addToCart(product));
   toast.success(`${product.name} додано в кошик!`);
};

  if (!product) {
    return <Container>Товар не знайдено</Container>;
  }

  // Розрахунок знижки, якщо є стара ціна
  const hasDiscount = !!product.oldPrice;

  return (
    <Container> <ToastContainer
    />
      <Breadcrumbs>
        <Link to="/">Головна</Link> / <Link to="/catalog">Каталог</Link> / {product.name}
      </Breadcrumbs>

      <MainSection>
        {/* Ліва колонка: Галерея */}
        <GallerySection>
          <MainImage src={activeImage} alt={product.name} />
          <Thumbnails>
            {product.image.map((img) => (
              <Thumb key={img} src={img}   onClick={() => setActiveImage(img)}
            style={{
              cursor: "pointer",
              opacity: activeImage === img ? 1 : 0.4,
             
            }} />
            ))}
          </Thumbnails>
        </GallerySection>

        {/* Права колонка: Інфо та покупка */}
        <InfoSection>
          <Title>{product.name}</Title>
          <RatingRow>
            
            <Availability>● В наявності</Availability>
          </RatingRow>

          <PriceCard>
            <PriceWrapper>
              <CurrentPrice>{product.price.toLocaleString()} ₴</CurrentPrice>
              {hasDiscount && <OldPrice>{product.oldPrice.toLocaleString()} ₴</OldPrice>}
            </PriceWrapper>

            <ActionRow>
              <QuantitySelector>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </QuantitySelector>
              <AddToCartBtn onClick={handleAdd}>В КОШИК</AddToCartBtn>
            </ActionRow>
            
           
          </PriceCard>

          <DeliveryInfo>
            <p><strong>Ваше місто:</strong> Київ</p>
            <p>🚚 Доставка по Україні (Розрахувати вартість)</p>
          </DeliveryInfo>

        </InfoSection>
      </MainSection>
       <TabsWrapper>
      <TabButtons>
        <TabButton
          active={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Опис
        </TabButton>
        <TabButton
          active={activeTab === "attributes"}
          onClick={() => setActiveTab("attributes")}
        >
          Характеристики
        </TabButton>
      </TabButtons>

      <TabContent>
        {activeTab === "description" && <DescriptionText>{product.description}</DescriptionText>}
        {activeTab === "attributes" && (
         <SpecsGrid>
        <SpecItem><span>Розміри, мм</span> <b>{product.size || '2500x1500'}</b></SpecItem>
        <SpecItem><span>Тип</span> <b>{product.type || ''}</b></SpecItem>
        <SpecItem><span>Колір</span> <b>{product.color || ''}</b></SpecItem>
        <SpecItem><span>Колір</span> <b>{product.color || ''}</b></SpecItem>
      </SpecsGrid>
        )}
      </TabContent>
    </TabsWrapper>

    </Container>
  );
};