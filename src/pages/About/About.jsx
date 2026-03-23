import {
  Container,
  ContentSection,
  Description,
  GalleryGrid,
  GallerySection,
  GalleryTitle,
  HeroSection,
  ImagePlaceholder,
  StatCard,
  StatNumber,
  StatsGrid,
  StatText,
  Subtitle,
  Title,
} from './About.styled';

const AboutUs = () => {
  return (
    <Container>
      <HeroSection>
        <Title>Про Дідів Хлів</Title>
        <Subtitle>Даємо друге життя якісним велозапчастинам</Subtitle>
      </HeroSection>

      <ContentSection>
        <Description>
          Бізнес створений з переконанням, що обладнання може бути доступним. Ми
          спеціалізуємося на розборі цікавих і унікальних велосипедів, усі
          запчастини перевірені нами. Стараємося пропонувати тільки найкраще від
          Shimano, Sram, Campagnolo та інших світових брендів.
        </Description>

        <StatsGrid>
          <StatCard>
            <StatNumber>3000+</StatNumber>
            <StatText>Перевірених деталей</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>6 років</StatNumber>
            <StatText>Досвіду на ринку</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatText>Контроль якості</StatText>
          </StatCard>
        </StatsGrid>
      </ContentSection>

      <GallerySection>
        <GalleryTitle>Наша майстерня</GalleryTitle>
        <GalleryGrid>
          <ImagePlaceholder color="#e2e2e2">Фото майстерні</ImagePlaceholder>
          <ImagePlaceholder color="#d1d1d1">
            Процес діагностики
          </ImagePlaceholder>
          <ImagePlaceholder color="#bcbcbc">Склад запчастин</ImagePlaceholder>
          <ImagePlaceholder color="#a8a8a8">Готові велосипеди</ImagePlaceholder>
        </GalleryGrid>
      </GallerySection>
    </Container>
  );
};

export default AboutUs;
