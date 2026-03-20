import { useSelector } from 'react-redux';
import {
  Container,
  CheckoutWrapper,
  Section,
  Form,
  Summary,
  InputGroup,
  Label,
  Input,
  Button,
  Title,
  CartPreviewList,
  CartPreviewItem,
  PreviewImg,
  PreviewInfo,
  ErrorText,
} from './CheckoutPage.styled';
import ReactInputMask from 'react-input-mask';
import { useMemo, useState } from 'react';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Рахуємо загальну суму динамічно
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+38 (0',
    email: '',
    city: '',
    postOffice: '',
  });

  // 2. Функція перевірки (валідації)
  const validate = (data) => {
    const errors = {};

    // Перевірка ПІБ (мінімум 2 слова)
    if (data.fullName.trim().split(' ').length < 2) {
      errors.fullName = "Введіть прізвище та ім'я";
    }

    // Перевірка пошти (регулярний вираз)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Некоректний формат e-mail';
    }

    // Перевірка телефону (має бути 10 цифр після +38)
   const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length < 12) {
    errors.phone = "Номер неповний";
  }

    // Перевірка пустих полів доставки
    if (!data.city.trim()) errors.city = 'Вкажіть місто';
    if (!data.postOffice.trim()) errors.postOffice = 'Вкажіть відділення';
    console.log("Errors list:", errors); // Це покаже в консолі браузера, яке саме поле "блокує" кнопку

    return errors;
  };

  // 3. Обчислюємо помилки та активність кнопки
  const errors = useMemo(() => validate(formData), [formData]);
  const isFormValid = Object.keys(errors).length === 0 && cartItems.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Спеціальна логіка для телефону, щоб не видалити префікс
    if (name === 'phone' && !value.startsWith('+38 (0')) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Container>
      <Title>Оформлення замовлення</Title>
      <CheckoutWrapper>
        {/* Ліва частина - Форма даних */}
        <Section>
          <Form>
            <h3>Контактні дані</h3>
            <InputGroup>
              <Label>Прізвище та ім&rsquo;я</Label>
              <Input
                type="text"
                placeholder="Прізвище Ім'я"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {formData.fullName && errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
            </InputGroup>
            <InputGroup>
              <Label>Номер телефону</Label>
              <ReactInputMask
                mask="+38 (099) 999-99-99"
                maskChar="_"
                alwaysShowMask={true}
                name="phone"
    value={formData.phone}
    onChange={handleChange}
              >
                {(inputProps) => <Input {...inputProps} type="tel" 
               
               />}
              </ReactInputMask>
              {formData.phone.length > 6 && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </InputGroup>
           <InputGroup>
              <Label>E-mail</Label>
              <Input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="email@example.com" 
              />
              {formData.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputGroup>

           <h3>Доставка</h3>
            <InputGroup>
              <Label>Місто</Label>
              <Input name="city" value={formData.city} onChange={handleChange} placeholder="Київ" />
            </InputGroup>
            
            <InputGroup>
              <Label>Відділення Нової Пошти</Label>
              <Input name="postOffice" value={formData.postOffice} onChange={handleChange} placeholder="№1, вул. Центральна" />
            </InputGroup>
          </Form>
        </Section>


        <Summary>
          <h3>Ваше замовлення</h3>

          <CartPreviewList>
            {cartItems.map((item) => (
              <CartPreviewItem key={item.id}>
                <PreviewImg src={item.image} alt={item.name} />
                <PreviewInfo>
                  <p className="item-name">{item.name}</p>
                  <p className="item-details">
                    {item.quantity} шт. × {item.price} грн
                  </p>
                </PreviewInfo>
                <span className="item-total">
                  {item.price * item.quantity} грн
                </span>
              </CartPreviewItem>
            ))}
          </CartPreviewList>

          <div className="summary-row">
            <span>Товари ({totalQuantity})</span>
            <span>{totalAmount} ₴</span>
          </div>
          <div className="summary-row">
            <span>Доставка</span>
            <span>За тарифами перевізника</span>
          </div>

          <hr />

          <div className="total">
            <span>Всього до сплати:</span>
            <span>{totalAmount} грн</span>
          </div>

         <Button 
            type="submit" 
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
          >
            Підтвердити замовлення
          </Button>
          {!isFormValid && <p style={{color: '#888', fontSize: '12px', marginTop: '10px', textAlign: 'center'}}>
            Заповніть всі поля правильно, щоб продовжити
          </p>}
        </Summary>
      </CheckoutWrapper>
    </Container>
  );
};

export default CheckoutPage;
