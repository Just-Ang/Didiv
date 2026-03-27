import {
  Column,
  ColumnTitle,
  FooterLink,
  FooterSection,
  FooterWrapper,
  IconSocial,
  SocialIcons,
  TopWrapper,
} from './Footer.styled';
import sprite from '../../img/symbol-defs.svg';

export const Footer = () => {
  return (
    <FooterSection>
    <FooterWrapper>
      <TopWrapper>
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
</TopWrapper>
      <Column>
        <ColumnTitle>Контакти</ColumnTitle>
        <FooterLink href="tel:+380979999999">+38 (097) 999-99-99</FooterLink>
        <FooterLink href="mailto:email@email.com">email@email.com</FooterLink>
        <SocialIcons>
          <IconSocial
            href="https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px">
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </IconSocial>
          <IconSocial
            href="https://t.me/didivxliv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px">
              <use href={`${sprite}#icon-telegram`} />
            </svg>
          </IconSocial>
        </SocialIcons>
      </Column>
    </FooterWrapper>
    </FooterSection>
  );
};
