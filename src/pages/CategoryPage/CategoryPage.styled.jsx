import styled from 'styled-components';

export const Wrapper = styled.div`
     width: 100%;
    max-width: 380px; /* максимальна ширина контенту */
  margin: 0 auto; /* центрування по горизонталі */
  padding: 20px; /* відступи з усіх сторін */
  display: flex;
  flex-direction: row;
  gap: 20px; /* відстань між блоками */

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1340px;
  }
`;
