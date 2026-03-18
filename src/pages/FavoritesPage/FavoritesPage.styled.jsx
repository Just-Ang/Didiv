import styled from 'styled-components';

export const Container = styled.div`
 

  color: var(-black-color);
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }

  margin: 0 auto;
  padding: 40px 20px;
  
`;

export const Breadcrumbs = styled.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
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
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`;

export const ItemCard = styled.div`
display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid #eee;
   transition: all 0.3s ease;

  &.removing {
    opacity: 0;
    transform: translateX(40px);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 150px 1.5fr 1.2fr; 
    align-items: center;
    gap: 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const Image = styled.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const ProductName = styled.h3`
 font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
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
export const ClearButton = styled.button`
  width: 100%;
  background:var(--light-grey);
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
    background: #9e9e9e;
  }
`;
