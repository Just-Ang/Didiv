

// Підключаємо базові стилі Swiper
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const StyledHeroSection = styled.section`
  width: 100%;

  margin: 20px auto;
  border-radius: 24;
  position: relative;
  --swiper-theme-color: var(--orange-color); /* Колір активної крапки та стрілок */

`;

export const SlideInner = styled.div`
  height: 450px;
  background-image: linear-gradient(90deg, rgba(44, 35, 16, 0.85) 0%, rgba(44, 35, 16, 0.2) 100%), 
                    url(${props => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 60px;
  color: white;

  @media (max-width: 768px) {
    height: 350px;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  
  h1 {
    font-family: var(--main-font);
    font-size: 25px;
    font-weight: 400;
     @media screen and (min-width: 768px) {
  font-size: 42px;
  font-weight: 700;
  }
    line-height: 1.1;
    margin-bottom: 20px;
    
  }

  p {
     font-size: 15px;
     @media screen and (min-width: 768px) {
   font-size: 20px;
  }
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`;

export const OrderButton = styled.a`
  display: inline-block;
  background-color: var(--orange-color);
  color: #fff;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    background-color: #e0961d;
  }
`;