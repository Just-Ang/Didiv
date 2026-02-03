import styled from "styled-components";


export const Menu = styled.div`
overflow: visible;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;

  background: #fff;
  border-radius: 14px;
  padding: 16px 20px;

  min-width: 240px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;

  transition: color 0.15s ease;

  &:hover {
    color: #1fa55b;
  }
`;


