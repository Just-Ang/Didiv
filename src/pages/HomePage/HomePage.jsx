import CategoryHero from '../../components/CategoryHero/CategoryHero';
import { HeroSlider } from '../../components/HeroSlider/HeroSlider';
import { NewArrivals } from '../../components/NewArrivals/NewArrivals';
import { Container, HomeSection } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeSection>
      <Container>
        <HeroSlider></HeroSlider>
        <NewArrivals/>
        <CategoryHero></CategoryHero>
      </Container>
    </HomeSection>
  );
};

export default HomePage;
