import styled from 'styled-components';

export const EmptyWripper = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }

  margin: 0 auto;
`;

export const Breadcrumbs = styled.div`
 font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`;

export const Section = styled.div`
  background-color: #fdfaf7;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;

export const CartImage = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;

export const MessageTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

export const SubMessage = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

export const ActionButton = styled.button`
  background-color: #f39212;
  color: white;
  padding: 15px 45px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68a00;
  }
`;
