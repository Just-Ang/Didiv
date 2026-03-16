import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
 background: radial-gradient(circle at 50% 45%, #634e3f 0%, #4d392d 35%, #36241b 65%, #1e0f09 100%);
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column; 
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 80px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  text-align: left; 

  @media screen and (min-width: 768px) {
    min-width: 150px;
    flex: 1;
  }
`;

export const ColumnTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const FooterLink = styled(Link)`
  color:var(--white-color);
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
   
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const IconCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a332a;
  font-size: 18px;
  cursor: pointer;
`;