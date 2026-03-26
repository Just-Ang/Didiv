import { StatCard, StatNumber, StatsGrid, StatText } from "./Stas.styled";

const Stats = () => {
  return (
     <StatsGrid>
                <StatCard>
                  <StatNumber>3000+</StatNumber>
                  <StatText>Перевірених деталей</StatText>
                </StatCard>
                <StatCard>
                  <StatNumber>6 років</StatNumber>
                  <StatText>Досвіду на ринку</StatText>
                </StatCard>
                <StatCard>
                  <StatNumber>100%</StatNumber>
                  <StatText>Контроль якості</StatText>
                </StatCard>
              </StatsGrid>
  )};
  export default Stats;