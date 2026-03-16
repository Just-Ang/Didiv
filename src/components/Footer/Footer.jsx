import { Column, ColumnTitle, FooterLink, FooterWrapper, IconCircle, SocialIcons } from "./Footer.styled";


export const Footer = () => {
  return (
    <FooterWrapper>
      <Column>
        <ColumnTitle>Навігація</ColumnTitle>
        <FooterLink to="/">Головна</FooterLink>
        <FooterLink to="/about">Про нас</FooterLink>
        <FooterLink to="/catalog">Каталог</FooterLink>
        <FooterLink to="/contacts">Контакти</FooterLink>
      </Column>

      <Column>
        <ColumnTitle>Інформація</ColumnTitle>
        <FooterLink to="/delivery">Оплата і доставка</FooterLink>
        <FooterLink>Повернення</FooterLink>
        <FooterLink>Гарантія</FooterLink>
        <FooterLink>Політика конфіденційності</FooterLink>
      </Column>

      {/* <Column>
        <ColumnTitle>Контакти</ColumnTitle>
        <FooterLink href="tel:+380979999999">+38 (097) 999-99-99</FooterLink>
        <FooterLink href="tel:+380999999999">+38 (099) 999-99-99</FooterLink>
        <FooterLink href="tel:+380739999999">+38 (073) 999-99-99</FooterLink>
      </Column> */}

      <Column>
        <ColumnTitle>Контакти</ColumnTitle>
        <FooterLink href="tel:+380979999999">+38 (097) 999-99-99</FooterLink>
        <FooterLink href="mailto:email@email.com">email@email.com</FooterLink>
        <SocialIcons>
          <IconCircle>f</IconCircle>
          <IconCircle>i</IconCircle>
          <IconCircle>t</IconCircle>
          <IconCircle>y</IconCircle>
        </SocialIcons>
      </Column>
    </FooterWrapper>
  );
};