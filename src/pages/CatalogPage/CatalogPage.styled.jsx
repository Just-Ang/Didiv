import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const CatalogTitle = styled.h1`
 
`;
export const CatalogBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 колонки однакової ширини */
  gap: 24px; /* відстань між картками */
  margin-top: 32px;

  /* адаптивність для планшета/мобільного */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 колонки на середніх екранах */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 колонка на мобілці */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.25); /* чорний з прозорістю 25% */
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  border-radius: 16px;
  overflow: hidden;
  background: #fff;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;




export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
`;


export const ItemTitle = styled.p`
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;