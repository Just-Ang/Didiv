import CategoryHero from '../../components/CategoryHero/CategoryHero';
import { HeroSlider } from '../../components/HeroSlider/HeroSlider';
import { Container, HomeSection } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeSection>
      <Container>
        <HeroSlider></HeroSlider>
        <CategoryHero></CategoryHero>
      </Container>
    </HomeSection>
  );
};

export default HomePage;
