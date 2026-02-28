
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
max-width: 768px;
padding: 20px;
padding-left: 50px;
padding-right: 50px;
text-align:center;
background: linear-gradient(1800deg, #5b3721, #695c51); // приклад градієнта



@media screen and (min-width: 1440px) {
   max-width: 1440px,
  }
`;

export const HeaderUp = styled.div`
display: flex;
`;
export const HeaderDown = styled.div`
display: flex;
    justify-content: space-around;
`;



export const Logo = styled.img`
  display: flex;
  width:70px;
  height:70px;
  justify-content: center;
  align-items: center;
`;



export const ProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: var(--main-brand-color);
  color: var(--white-color);
  border: none;
  border-radius: 30px;

  padding: 12px 22px;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
   
  }
`;

export const Wrapper = styled.div`

  z-index: 9999;
`;
