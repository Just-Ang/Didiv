
import styled from 'styled-components';



export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif; // Основний текст
  color: #1a1a1a;
`;

export const Breadcrumbs = styled.nav`
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif; // Шрифт із засічками як на фото
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ListContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const Image = styled.img`
  width: 130px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  max-width: 280px;
  margin: 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const SummaryCard = styled.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #f37a20; // Помаранчевий з вашого скріншоту
  color: white;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #d96a1a;
  }
`;