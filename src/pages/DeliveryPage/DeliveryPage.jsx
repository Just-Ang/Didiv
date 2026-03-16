
import InfoPageLayout from "../../components/InfoPageLayout/InfoPageLayout";
import { List, Section, SectionTitle, Text } from "./DeliveryPage.styled";

export const DeliveryPage = () => {
  return (
    <InfoPageLayout title="Оплата і доставка" breadcrumbPath="Доставка">
      <Section>
        <SectionTitle>Способи доставки</SectionTitle>
        <Text>Ми доставляємо замовлення по всій Україні за допомогою:</Text>
        <List>
          <li>Нова Пошта (у відділення або кур1єром)</li>
          <li>Самовивіз з нашого магазину</li>
          <li>Укрпошта</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Варіанти оплати</SectionTitle>
        <Text>Ви можете обрати зручний для вас спосіб оплати:</Text>
        <List>
          <li>Оплата карткою на сайті (Visa/Mastercard)</li>
          <li>Післяплата (накладений платіж) при отриманні</li>
          <li>Безготівковий розрахунок</li>
        </List>
      </Section>
    </InfoPageLayout>
  );
};