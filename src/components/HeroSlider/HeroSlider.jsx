import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Content, OrderButton, SlideInner, StyledHeroSection } from './HeroSlider.styled';
import { Swiper} from 'swiper/react';

const slidesData = [
  {
    id: 1,
    title: "Дідів хлів - найкращий вибір для Вашого велосипеда",
    desc: "Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",
    img: import.meta.env.BASE_URL + 'bike2-hero.jpeg',
    btn:"До каталогу",
    url: "/catalog",
  },
  {
    id: 2,
    title: "Постійне оновлення товару",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",
    img: import.meta.env.BASE_URL + 'inside.webp',
      btn:"До новинок",
       url: "/catalog/new",
  }
];
export const HeroSlider = () => {
  return (
    <StyledHeroSection>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideInner bg={slide.img}>
              <Content>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <OrderButton to={slide.url}>{slide.btn}</OrderButton>
              </Content>
            </SlideInner>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHeroSection>
  );
};