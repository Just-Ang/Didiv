import styled from 'styled-components';

// --- Styled Components ---

export const PageContainer = styled.div`
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 1340px;
  }

  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`;

export const Breadcrumbs = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start; /* Щоб SummaryCard не розтягувалася по висоті */
    justify-content: space-between; /* Розносить список і чек-аут */
  }
`;

export const CartItemsList = styled.div`
  flex: 1; /* Займає доступний простір */
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid #eee;

  @media screen and (min-width: 768px) {
    display: grid;
    /* 1. Картинка | 2. Назва | 3. Лічильник+Ціна | 4. Кнопки */
    grid-template-columns: 100px 1.5fr 1.2fr 80px; 
    align-items: center;
    gap: 20px;
  }
`;



export const ProductImg = styled.img`
  width: 100%;

  height: auto;
`;

export const ProductInfo = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }
`;

export const CounterPrice = styled.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;
export const BtnIcons = styled.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 5px;
  width: fit-content;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
  }

  span {
    padding: 0 10px;
  }
`;

export const PriceWrapper = styled.div`
  text-align: right;
  .current-price {
    font-size: 18px;
    font-weight: 700;
  }
  .old-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
  }
`;
export const ButtonDelete = styled.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`;
export const ButtonFavorite = styled.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`;

export const SummaryCard = styled.div`

  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;

  top: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;
    padding: 10px;
  }
   @media screen and (min-width: 768px) {
    
   width: 400px;
    
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;

  &.total {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
    color: #000;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const OrderButton = styled.button`
  width: 100%;
  background: #f47920;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #e66a10;
  }
`;

export const HeartIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: ${({ $active }) =>
    $active ? 'var(--red-color)' : 'var(--black-color)'};
`;
