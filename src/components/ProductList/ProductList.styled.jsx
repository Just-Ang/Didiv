import styled from "styled-components";

export const Wrapper = styled.div``;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 колонки */
  gap: 24px;
  margin-top: 32px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
     padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
      padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
}
 @media screen and (min-width: 1440px) {
     grid-template-columns: repeat(4, 1fr); 
     padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
   padding-bottom:30px;
 

  &:hover {
     transform: scale(1.05); /* трохи збільшуємо карточку */
    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
     
     div.card-buttons {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  color: #555;
`;

export const CardWeight = styled.p`
  font-size: 16px;
  color: #555;
`;

export const CardButtons = styled.div.attrs({ className: 'card-buttons' })`
  position: absolute;
  
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s;
`;

export const Button = styled.button`
  flex: 1;
  padding: 6px 5px;
  border: none;
  border-radius: 6px;
  background-color: #a2856a;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
      display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 10px;
     span.button-text {
    display: none; /* за замовчуванням ховаємо текст */
  }

  @media (min-width: 768px) {
    span.button-text {
      display: inline; /* показуємо текст на десктопі */
    }
  }


  &:hover {
    background-color: #a85d5d;
  }
`;

export const CartLogo = styled.svg`
  width: 24px;
  height: 24px;
 fill: var(--white-color);
`;
export const FavoriteLogo = styled.svg`
  width: 24px;
  height: 24px;
 fill: var(--white-color);
`;