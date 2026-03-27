import {
  ContactWrapper,
  Container,
  FollowBadge,
  InfoGrid,
  InfoItem,
  Section,
  SocialContainer,
  SocialGrid,
  SocialLink,
  SocialText,
  SocialTitle,
  Subtitle,
  Title,
} from './ContactsPage.styled';

import sprite from '../../img/symbol-defs.svg';

const ContactsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Контакти</Title>
        <Subtitle>Зв’яжіться з нами для консультації або замовлення</Subtitle>

        <ContactWrapper>
          <InfoGrid>
            <InfoItem>
              <h3>Адреса</h3>
              <p>вул. Казармена 6Г, Київ, Україна</p>
              <a
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  marginTop: '5px',
                  cursor: 'pointer',
                }}
                href="https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Показати на карті
              </a>
            </InfoItem>
            <InfoItem>
              <h3>Телефон</h3>
              <p>+38 (097) 123-45-67</p>
            </InfoItem>
            <InfoItem>
              <h3>Email</h3>
              <p>didivhliv.com</p>
            </InfoItem>
            <InfoItem>
              <h3>Графік роботи</h3>
              <p>З 11:00 - 20:00</p>
              <p>Вихідні: Пн, Чт</p>
            </InfoItem>
          </InfoGrid>

          <SocialContainer>
            <SocialTitle>Ми в соцмережах</SocialTitle>
            <SocialText>
              Слідкуйте за нашими новинами, новими надходженнями та крутими
              вело-поїздками у зручному для вас форматі.
            </SocialText>

            <SocialGrid>
              <SocialLink
                href="https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20px">
                  <use href={`${sprite}#icon-instagram`} />
                </svg>
                <span>Instagram</span>
              </SocialLink>

              <SocialLink
                href="https://t.me/didivxliv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20px">
                  <use href={`${sprite}#icon-telegram`} />
                </svg>
                <span>Telegram</span>
              </SocialLink>
            </SocialGrid>

            <FollowBadge>Приєднуйся до спільноти!</FollowBadge>
          </SocialContainer>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

export default ContactsPage;
