import styled from "styled-components";


export const CartLogo = styled.svg`
  width: 24px;
  height: 24px;
 fill: var(--white-color);
`;

// Обгортка іконки
export const Wrapper = styled.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`;

// Кружечок-бейдж
export const Badge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: #ff3b30; /* червоний колір */
  color: white;
  border-radius: 999px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: 0 0 1px rgba(0,0,0,0.3);
`;