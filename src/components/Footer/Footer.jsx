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
           <IconSocial
            href="https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="27px"
            height="27px"
            style={{ marginTop: '5px' }}
            >
              <use href={`${sprite}#icon-olx`} />
            </svg>
          </IconSocial>
          
        </SocialIcons>
      </Column>
    </FooterWrapper>
    </FooterSection>
  );
};
