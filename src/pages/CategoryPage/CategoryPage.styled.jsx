import styled from 'styled-components';

export const Wrapper = styled.div`
     width: 100%;
    max-width: 380px; /* максимальна ширина контенту */
  margin: 0 auto; /* центрування по горизонталі */
  padding: 20px; /* відступи з усіх сторін */
  display: flex;
  flex-direction: column;
  gap: 20px; /* відстань між блоками */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1340px;
  }
`;



export const TopBar = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none; /* ховаємо кнопку на десктопі */
  }
`;

export const FilterButton = styled.button`
  padding: 5px ;
  background: #675650;
  color: white;
  border: none;
  border-radius: 8px;
`;
export const FilterIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);

`
export const SortButton = styled.button`
  padding: 10px 10px;
  background: #675650;
  color: white;
  border: none;
  border-radius: 8px;
`;
export const SortIcon
 = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);

`

export const MobileFilterOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileFilterContent = styled.div`
  position: fixed;
  inset: 0;
  background: white;
  padding: 20px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;