import styled from "styled-components";

export const AccountWrapper = styled.main`
 width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
    padding: 30px 10px;

  @media screen and (min-width: 768px) {
     gap: 20px;
    flex-direction: row;
   max-width: 994px;
    padding: 40px 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    display: grid;
    grid-template-columns: 290px 1fr;
    gap: 40px;
    align-items: start;
  }

`;

export const Content = styled.section`
 flex: 1;
  display: flex;
  flex-direction: column;
`;