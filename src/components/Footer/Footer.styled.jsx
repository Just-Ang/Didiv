import styled from "styled-components";

export const FooterSection = styled.div`
    background: radial-gradient(circle at 50% 45%, #634e3f 0%, #4d392d 35%, #36241b 65%, #1E0F09 100%);`

export const FooterContainer = styled.div`
width: 100%;
    max-width: 380px;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
    margin-right: auto;
text-align:center;
display: flex;
flex-direction: column;
gap: 10px;

@media screen and (min-width: 768px) {
  max-width: 1440px;
  padding-left: 30px;
padding-right: 30px;

  }
@media screen and (min-width: 1440px) {
   max-width: 1440px,
  }
`;