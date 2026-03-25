import styled from 'styled-components';

export const Wrapper = styled.div``;
export const GridWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 750px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 32px;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    max-width: 1340px;
  }
`;

export const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding-bottom: 30px;

  &:hover {
     @media screen and (min-width: 768px ){
  transform: scale(1.05);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  }
    


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
   position: static;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 1;

  @media screen and (min-width: 768px ){
  
      position: absolute;
    opacity: 0;
    transform: translateY(20px);
  transition: all 0.3s;
  }
`;

export const Button = styled.button`
  padding: 6px 5px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
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
