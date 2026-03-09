import styled from '@emotion/styled';

export const Container = styled.div`
   width: 100%;              // або конкретна ширина
height:40vw;
   background-image: url(${import.meta.env.BASE_URL + 'error.png'});
  background-size: cover;   // фото займає весь контейнер
  background-position: center; // центрування
  background-repeat: no-repeat; // щоб не повторювалось

`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const ErrorImg = styled.img`
  
`