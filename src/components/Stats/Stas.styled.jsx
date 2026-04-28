import styled from "styled-components";

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`;

export const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`;

export const StatText = styled.div`
  font-size: 14px;
  color: #888;
`;


