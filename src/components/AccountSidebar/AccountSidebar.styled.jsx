import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.aside`
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 110px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background: #4c3a30;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
`;

export const Name = styled.h3`
  margin-bottom: 4px;
`;

export const Email = styled.p`
  color: #777;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuButton = styled(NavLink)`
  height: 48px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
      display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;



  background: ${({ $active }) =>
    $active ? "#5b4637" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#fff" : "#333"};

  transition: .25s;

  &:hover {
    background: ${({ $active }) =>
      $active ? "#5b4637" : "#f5f1ec"};
  }
`;

