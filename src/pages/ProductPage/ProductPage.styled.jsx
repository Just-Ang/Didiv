import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

export const Breadcrumbs = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 20px;
  a { text-decoration: none; color: inherit; }
`;

export const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const GallerySection = styled.div`

`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Thumb = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`;

export const InfoSection = styled.div``;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;


export const Availability = styled.span`color: #27ae60; font-size: 14px;`;

export const PriceCard = styled.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`;

export const CurrentPrice = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  button {
    border: none; background: none; padding: 10px 15px; cursor: pointer;
    &:hover { background: #eee; }
  }
  span { padding: 0 10px; min-width: 30px; text-align: center; }
`;

export const AddToCartBtn = styled.button`
  flex-grow: 1;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #e67e22; }
`;

export const OneClickBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #2980b9;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

export const SizeSection = styled.div`
  margin-top: 30px;
`;

export const SectionLabel = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SizeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SizeBadge = styled.div`
  padding: 8px 15px;
  border: 1px solid ${props => props.active ? '#27ae60' : '#ddd'};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${props => props.active ? '#f0fff4' : 'white'};
`;



export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const SpecItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  span { color: #888; margin-bottom: 4px; }
  b { color: #333; }
`;

export const DeliveryInfo = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`;



export const TabsWrapper = styled.div`
  margin-top: 20px;
`;

export const TabButtons = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`;

export const TabButton = styled.button`
      padding: 10px 0;
    cursor: pointer;
    font-weight: 500;
       border: none;
    background-color: transparent;
    border-bottom: 2px solid #717171;

  border-bottom: ${({ active }) => (active ? "2px solid var(--second-color)" : "none")};
  color: ${({ active }) => (active ? "var(--second-color)" : "#717171")};
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

export const TabContent = styled.div`
  padding: 15px;
  background: #fff;
`;

export const  DescriptionText = styled.p`
font-family: var(--main-font);
font-size: 20px;


`

export const FavoriteButton = styled.button`
    font-weight: bold;
  background: transparent;

  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    border-color: #bbb;
  }
`;

export const HeartIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--black-color);
`;