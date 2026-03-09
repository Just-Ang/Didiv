import styled from '@emotion/styled';

export const Container = styled.div`
   width: 100%;
height:100vw;
   background-image: url(${import.meta.env.BASE_URL + 'error.png'});
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat; 
   @media screen and (min-width: 768px) {
  height:40vw;
  }

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