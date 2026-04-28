import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuNav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; 
  }
   @media (min-width: 768px) {
   order:1;
    gap: 30px;
    margin-right: auto;
    margin-left: auto;
 
  }
  @media (min-width: 920px) {
 
    gap: 80px;
 
  }
`;

 export const StyledLink = styled(Link)`
 font-size:20px;
      display: flex;
    align-items: center;
    text-align: center;
        justify-content: center;
         text-decoration: none;
  color: var(--white-color);
  font-weight: 500;
  cursor: pointer;

  &:hover {
      color: #ffffff;
      text-shadow: 0 0 5px rgba(255,255,255,0.8);
  }
`;