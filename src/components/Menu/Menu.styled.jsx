import styled from "styled-components";

export const MenuNav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; 
  }
   @media (min-width: 768px) {
   order:1;
   margin-right: 200px;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: var(--white-color);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;