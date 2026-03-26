import Stats from '../../components/Stats/Stats';
import {
  Container,
  ContentSection,
  Description,
  GalleryGrid,
  GallerySection,
  GalleryTitle,
  HeroSection,
  ImagePlaceholder,
  Section,
  Subtitle,
  Title,
} from './About.styled';

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <HeroSection>
          <Title>Про Дідів Хлів</Title>
          <Subtitle>Даємо друге життя якісним велозапчастинам</Subtitle>
        </HeroSection>

        <ContentSection>
          <Description>
            Бізнес створений з переконанням, що обладнання може бути доступним.
            Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі
            запчастини перевірені нами. Стараємося пропонувати тільки найкраще
            від Shimano, Sram, Campagnolo та інших світових брендів.
          </Description>

          <Stats/>
        </ContentSection>

        <GallerySection>
          <GalleryTitle>Наша майстерня</GalleryTitle>
          <GalleryGrid>
            <ImagePlaceholder color="#e2e2e2">Фото майстерні</ImagePlaceholder>
            <ImagePlaceholder color="#d1d1d1">
              Процес діагностики
            </ImagePlaceholder>
            <ImagePlaceholder color="#bcbcbc">Склад запчастин</ImagePlaceholder>
            <ImagePlaceholder color="#a8a8a8">
              Готові велосипеди
            </ImagePlaceholder>
          </GalleryGrid>
        </GallerySection>
      </Container>{' '}
    </Section>
  );
};

export default AboutUs;
