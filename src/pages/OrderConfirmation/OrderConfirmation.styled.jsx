
import styled from "styled-components";

// ====== Styled components ======
export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;

export const Message = styled.p`
  font-size: 1.1rem;
  margin: 0.3rem 0;
`;

export const OrderSummary = styled.div`
  margin-top: 2rem;
  text-align: left;
  display: inline-block;
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
`;

export const SummaryTitle = styled.h2`
  margin-bottom: 0.8rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const PaymentInfo = styled.div`
  margin-top: 1.5rem;
`;

export const NextActions = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color:var(--orange-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;

  &:hover {
    background-color: #005fcc;
  }
`;
