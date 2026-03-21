import { useSelector } from 'react-redux';
import Select from 'react-select';

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
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 const API_KEY = import.meta.env.VITE_NP_API_KEY;
  const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+38 (0',
    email: '',
    city: '',
    postOffice: '',
  });
  const [inputCity, setInputCity] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  const [officeOptions, setOfficeOptions] = useState([]);
const [deliveryMethod, setDeliveryMethod] = useState(null);
const [ukrOfficeOptions, setUkrOfficeOptions] = useState([]);
const [selectedUkrOffice, setSelectedUkrOffice] = useState(null);

  const generateOrderNumber = () => {
    const year = new Date().getFullYear().toString().slice(-2);
    const time = Date.now().toString().slice(-4);
    const random = Math.floor(100 + Math.random() * 900);
    return `${year}${time}${random}`;
  };
  
  const deliveryOptions = useMemo(() => {
  const options = [
    { value: 'nova', label: 'Нова пошта' },
    { value: 'ukr', label: 'Укрпошта' },
  ];

  if (selectedCity?.label === 'Київ') {
    options.push({ value: 'pickup', label: 'Самовивіз' });
  }

  return options;
}, [selectedCity]);

  useEffect(() => {
    if (inputCity.length < 2) return;

    const timer = setTimeout(async () => {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: { FindByString: inputCity },
        }),
      });
      const data = await res.json();
      const options = data.data.map((city) => ({
        value: city.Ref,
        label: city.Description,
      }));
      setCityOptions(options);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputCity]);


  useEffect(() => {
    if (!selectedCity) {
      setOfficeOptions([]);
      setSelectedOffice(null);
      return;
    }

    const fetchOffices = async () => {
      try {
        const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apiKey: API_KEY,
            modelName: 'AddressGeneral',
            calledMethod: 'getWarehouses',
            methodProperties: { CityRef: selectedCity.value },
          }),
        });
        const data = await res.json();
        const options = data.data.map((office) => ({
          value: office.Ref,
          label: office.Description, // тут можна додати тип та номер, напр. office.Description + ' №' + office.Number
        }));
        setOfficeOptions(options);
      } catch (err) {
        console.error('Помилка при завантаженні відділень:', err);
      }
    };

    fetchOffices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [selectedCity, deliveryMethod]);

  const handleCityChange = (option) => {
    setSelectedCity(option); // для Select
    setFormData((prev) => ({
      ...prev,
      city: option ? option.label : '', // записуємо у formData
    }));
     setSelectedOffice(null);
  setOfficeOptions([]);
  setSelectedUkrOffice(null);
  setUkrOfficeOptions([]);

  // Якщо нове місто не Київ, скидаємо самовивіз
  if (option?.label !== 'Київ' && deliveryMethod === 'pickup') {
    setDeliveryMethod(null);
  }
  };
  const handleOfficeChange = (option) => {
    setSelectedOffice(option);
    setFormData((prev) => ({
      ...prev,
      postOffice: option ? option.label : '', // записуємо у formData
    }));
  };

  const handleUkrOfficeChange = (option) => {
  setSelectedUkrOffice(option);
  setFormData((prev) => ({
    ...prev,
    postOffice: option ? option.label : '',
  }));
};

useEffect(() => {
  if (deliveryMethod !== 'ukr' || !selectedCity) return;

  // поки що просто приклад
  const fakeData = [
    { value: '1', label: 'Відділення №1' },
    { value: '2', label: 'Відділення №2' },
  ];

  setUkrOfficeOptions(fakeData);
}, [selectedCity, deliveryMethod]);



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
      errors.phone = 'Номер неповний';
    }

    // Перевірка пустих полів доставки
    if (!data.city.trim()) errors.city = 'Вкажіть місто';
    // if (!data.postOffice.trim()) errors.postOffice = 'Вкажіть відділення';
    console.log('Errors list:', errors); 
 if (deliveryMethod === 'nova' && !selectedOffice) {
  errors.postOffice = 'Оберіть відділення Нової пошти';
}

if (deliveryMethod === 'ukr' && !selectedUkrOffice) {
  errors.postOffice = 'Оберіть відділення Укрпошти';
}

    
    return errors;
  };
 

  // 3. Обчислюємо помилки та активність кнопки
  const errors = useMemo(() => validate(formData), [formData]);
  const isFormValid =
  Object.keys(errors).length === 0 && // немає помилок
  selectedCity !== null &&            // місто обрано
  deliveryMethod !== null &&          // спосіб доставки обрано
  (deliveryMethod === 'pickup' ||    // якщо самовивіз
   (deliveryMethod === 'nova' && selectedOffice !== null) || 
   (deliveryMethod === 'ukr' && selectedUkrOffice !== null)) &&
  cartItems.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Спеціальна логіка для телефону, щоб не видалити префікс
    if (name === 'phone' && !value.startsWith('+38 (0')) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const finalOrder = {
  ...formData,
  city: selectedCity.label,
  deliveryMethod,
  address:
    deliveryMethod === 'nova'
      ? selectedOffice?.label
      : deliveryMethod === 'ukr'
      ? selectedUkrOffice?.label
      : 'Самовивіз',
  items: cartItems,
  total: totalAmount,
  orderNumer: generateOrderNumber(),
};
   // Зберігаємо замовлення на сервері
    navigate("/order-confirmation", { state: { order: finalOrder } });

    console.log('Замовлення готове до відправки:', finalOrder);
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
              {formData.fullName && errors.fullName && (
                <ErrorText>{errors.fullName}</ErrorText>
              )}
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
                {(inputProps) => <Input {...inputProps} type="tel" />}
              </ReactInputMask>
              {formData.phone.length > 6 && errors.phone && (
                <ErrorText>{errors.phone}</ErrorText>
              )}
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
              {formData.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </InputGroup>

            <h3>Доставка</h3>
            <InputGroup>
              <Label>Місто</Label>
              <Select
                options={cityOptions}
                onInputChange={(value) => setInputCity(value)} // тільки встановлюємо рядок
                onChange={handleCityChange}
                placeholder="Почніть вводити місто..."
                value={selectedCity}
                noOptionsMessage={() => 'Введіть назву міста'}
              />
            </InputGroup>

            <InputGroup>
  <Label>Спосіб доставки</Label>
  <Select
    options={deliveryOptions}
    placeholder="Оберіть спосіб доставки..."
    isDisabled={!selectedCity}
   value={deliveryOptions.find(opt => opt.value === deliveryMethod) || null} 
    onChange={(option) => {
      setDeliveryMethod(option.value);

      // очищаємо попередні вибори
      setSelectedOffice(null);
      setSelectedUkrOffice(null);

    }}
  />
</InputGroup>
{deliveryMethod === 'nova' && (
            <InputGroup>
              <Label>Відділення</Label>
              <Select
                options={officeOptions}
                placeholder="Оберіть відділення..."
                isDisabled={!selectedCity} // блокуємо, поки не обрано місто
                onChange={handleOfficeChange}
                value={selectedOffice}
              />
            </InputGroup> )}
            {deliveryMethod === 'ukr' && (
  <InputGroup>
    <Label>Відділення Укрпошти</Label>
    <Select
      options={ukrOfficeOptions}
      placeholder="Оберіть відділення..."
      isDisabled={!selectedCity}
      onChange={handleUkrOfficeChange}
      value={selectedUkrOffice}
    />
  </InputGroup>
)}
{deliveryMethod === 'pickup' && (
  <InputGroup>
    <Label>Самовивіз</Label>
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '14px',
      color: '#333',
      lineHeight: '1.4',
    }}>
      <p>Ви обрали самовивіз.</p>
      <p>Адреса магазину: вул. Казармена 6Г, Київ</p>
      <p>Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт</p>
      <p>Телефон: +380 99 999 99</p>
    </div>
  </InputGroup>
)}
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
            onClick={handleSubmit}
            style={{
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? 'pointer' : 'not-allowed',
            }}
          >
            Підтвердити замовлення
          </Button>
          {!isFormValid && (
            <p
              style={{
                color: '#888',
                fontSize: '12px',
                marginTop: '10px',
                textAlign: 'center',
              }}
            >
              Заповніть всі поля правильно, щоб продовжити
            </p>
          )}
        </Summary>
      </CheckoutWrapper>
    </Container>
  );
};

export default CheckoutPage;
