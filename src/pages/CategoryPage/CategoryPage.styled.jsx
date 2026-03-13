import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
 
 

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
   @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }
 
`;

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none; /* ховаємо кнопку на десктопі */
  }
`;

export const FilterButton = styled.button`
  height: 30px;
  padding: 5px;
  background: var(--second-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;
export const FilterIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;
export const SortButton = styled.button`
  height: 30px;
  padding: 10px 10px;
  background: var(--second-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;
export const SortIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;

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
