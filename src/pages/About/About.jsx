import { Container, ContentSection, Description, GalleryGrid, GallerySection, GalleryTitle, HeroSection, ImagePlaceholder, StatCard, StatNumber, StatsGrid, StatText, Subtitle, Title } from "./About.styled";


const AboutUs = () => {
  return (
    <Container>
      <HeroSection>
        <Title>Про Дідів Хлів</Title>
        <Subtitle>Даємо друге життя якісним велозапчастинам</Subtitle>
      </HeroSection>

      <ContentSection>
        <Description>
          Ми — команда ентузіастів, які вірять, що професійне обладнання має бути доступним. 
          Наш магазин спеціалізується на доборі та перевірці вживаних компонентів 
          світових брендів, таких як Shimano, SRAM та Campagnolo.
        </Description>

        <StatsGrid>
          <StatCard>
            <StatNumber>3000+</StatNumber>
            <StatText>Перевірених деталей</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>6 роки</StatNumber>
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
          <ImagePlaceholder color="#d1d1d1">Процес діагностики</ImagePlaceholder>
          <ImagePlaceholder color="#bcbcbc">Склад запчастин</ImagePlaceholder>
          <ImagePlaceholder color="#a8a8a8">Готові велосипеди</ImagePlaceholder>
        </GalleryGrid>
      </GallerySection>
    </Container>
  );
};

export default AboutUs;


