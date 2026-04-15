import { useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CitySelect from '../../components/checkout/CitySelect/CitySelect';
import DeliveryMethodSelect from '../../components/checkout/DeliveryMethodSelect/DeliveryMethodSelect';
import OfficeSelect from '../../components/checkout/OfficeSelect/OfficeSelect';
import OrderSummary from '../../components/checkout/OrderSummary/OrderSummary';
import ContactForm from '../../components/checkout/ContactForm/ContactForm';
import {
  ButtonPay,
  CheckoutWrapper,
  Container,
  Section,
} from './CheckoutPage.styled';
import ukrposhtaData from '../../data/ukrposhta.json';

const API_KEY = import.meta.env.VITE_NP_API_KEY;
const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
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

  const [deliveryMethod, setDeliveryMethod] = useState(null);

  const [selectedOffice, setSelectedOffice] = useState(null);
  const [selectedUkrOffice, setSelectedUkrOffice] = useState(null);

  const [cityOptions, setCityOptions] = useState([]);
  const [officeOptions, setOfficeOptions] = useState([]);
  const [ukrOfficeOptions, setUkrOfficeOptions] = useState([]);
  const [ukrSearch, setUkrSearch] = useState('');

  const totalAmount = cartItems.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const generateOrderNumber = () => {
    const year = new Date().getFullYear().toString().slice(-2);
    const time = Date.now().toString().slice(-4);
    const random = Math.floor(100 + Math.random() * 900);
    return `${year}${time}${random}`;
  };

  const orderNumber = generateOrderNumber();
  console.log(orderNumber);
  // ---------------- МІСТА ----------------
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

      setCityOptions(
        data.data.map((c) => ({
          value: c.Ref,
          label: c.Description,
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [inputCity]);

  // ---------------- НОВА ПОШТА ----------------
  useEffect(() => {
    if (!selectedCity || deliveryMethod !== 'nova') return;

    const fetchOffices = async () => {
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

      setOfficeOptions(
        data.data.map((o) => ({
          value: o.Ref,
          label: o.Description,
        }))
      );
    };

    fetchOffices();
  }, [selectedCity, deliveryMethod]);

  // ---------------- УКРПОШТА (поки mock) ----------------
  useEffect(() => {
    if (deliveryMethod !== 'ukr' || !selectedCity) return;

    const filtered = ukrposhtaData
      .filter((o) => o.city === selectedCity.label)
      .filter((o) => o.address.toLowerCase().includes(ukrSearch.toLowerCase()))
      .slice(0, 20); // обмеження

    setUkrOfficeOptions(
      filtered.map((o, index) => ({
        value: index,
        label: o.address,
      }))
    );
  }, [selectedCity, deliveryMethod, ukrSearch]);

  // ---------------- МІСТО CHANGE ----------------
  const handleCityChange = (option) => {
    setSelectedCity(option);

    setFormData((prev) => ({
      ...prev,
      city: option?.label || '',
      postOffice: '',
    }));

    setDeliveryMethod(null);
    setSelectedOffice(null);
    setSelectedUkrOffice(null);
  };

  // ---------------- ВАЛІДАЦІЯ ----------------
  const validate = () => {
    const errors = {};

    if (formData.fullName.trim().split(' ').length < 2) {
      errors.fullName = "Введіть прізвище та ім'я";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Некоректний email';
    }

    if (formData.phone.replace(/\D/g, '').length < 12) {
      errors.phone = 'Номер неповний';
    }

    if (!selectedCity) errors.city = true;

    if (deliveryMethod === 'nova' && !selectedOffice) {
      errors.postOffice = true;
    }

    if (deliveryMethod === 'ukr' && !selectedUkrOffice) {
      errors.postOffice = true;
    }

    if (!deliveryMethod) errors.delivery = true;

    return errors;
  };

  const errors = useMemo(validate, [
    formData,
    deliveryMethod,
    selectedOffice,
    selectedUkrOffice,
    selectedCity,
  ]);

  const isFormValid = Object.keys(errors).length === 0 && cartItems.length > 0;

  // -------ОПЛАТА---------

  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    try {
      setLoading(true);

      await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            city: formData.city,
            products: cartItems.map((item) => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
            })),
            status_order: 'pending',
            order_number: orderNumber,
            delivery_method:
              deliveryMethod === 'nova'
                ? 'Нова Пошта'
                : deliveryMethod === 'ukr'
                ? 'УкрПошта'
                : 'Самовивіз',
            delivery_address:
              deliveryMethod === 'nova'
                ? selectedOffice?.label
                : deliveryMethod === 'ukr'
                ? selectedUkrOffice?.label
                : 'Самовивіз',
          },
        }),
      });
      console.log('ORDER:', orderNumber);
      console.log('AMOUNT:', totalAmount);
      const res = await fetch(
        'https://backenddidiv-production.up.railway.app/api/liqpay/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: totalAmount,
            order_number: orderNumber,
    
          }),
        }
      );
      console.log('ORDER:', orderNumber);
      console.log('AMOUNT:', totalAmount);
      const { data, signature } = await res.json();

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://www.liqpay.ua/api/3/checkout';
      // form.target = '_blank';
      // form.rel = 'noopener';

      form.innerHTML = `
      <input type="hidden" name="data" value="${data}" />
      <input type="hidden" name="signature" value="${signature}" />
    `;

      document.body.appendChild(form);
      form.requestSubmit();
    } catch (e) {
      console.error(e);
      alert('Помилка оплати');
    } finally {
      setLoading(false);
    }
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const orderNumber = generateOrderNumber();

    await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          products: cartItems.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
          })),
          status_order: 'pending',
          order_number: orderNumber,
          delivery_method:
            deliveryMethod === 'nova'
              ? 'Нова Пошта'
              : deliveryMethod === 'ukr'
              ? 'УкрПошта'
              : 'Самовивіз',
          delivery_address:
            deliveryMethod === 'nova'
              ? selectedOffice?.label
              : deliveryMethod === 'ukr'
              ? selectedUkrOffice?.label
              : 'Самовивіз',
        },
      }),
    });

    const finalOrder = {
      ...formData,
      city: selectedCity.label,
      deliveryMethod:
        deliveryMethod === 'nova'
          ? 'Нова Пошта'
          : deliveryMethod === 'ukr'
          ? 'УкрПошта'
          : 'Самовивіз',
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
    navigate('/order-confirmation', { state: { order: finalOrder } });
  };

  // ---------------- DELIVERY OPTIONS ----------------
  const deliveryOptions = useMemo(() => {
    const base = [
      { value: 'nova', label: 'Нова пошта' },
      { value: 'ukr', label: 'Укрпошта' },
    ];

    if (selectedCity?.label === 'Київ') {
      base.push({ value: 'pickup', label: 'Самовивіз' });
    }

    return base;
  }, [selectedCity]);

  return (
    <Container>
      <CheckoutWrapper>
        <Section>
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />

          <CitySelect
            cityOptions={cityOptions}
            selectedCity={selectedCity}
            onChange={handleCityChange}
            onInputChange={setInputCity}
          />

          <DeliveryMethodSelect
            options={deliveryOptions}
            value={deliveryMethod}
            onChange={setDeliveryMethod}
            selectedCity={selectedCity}
          />

          <OfficeSelect
            deliveryMethod={deliveryMethod}
            officeOptions={officeOptions}
            ukrOfficeOptions={ukrOfficeOptions}
            selectedOffice={selectedOffice}
            selectedUkrOffice={selectedUkrOffice}
            setSelectedOffice={setSelectedOffice}
            setSelectedUkrOffice={setSelectedUkrOffice}
            setUkrSearch={setUkrSearch}
          />
        </Section>

        <OrderSummary
          cartItems={cartItems}
          totalAmount={totalAmount}
          totalQuantity={totalQuantity}
          isFormValid={isFormValid}
          handleSubmit={handleSubmit}
        />

        <ButtonPay
          onClick={handlePay}
          disabled={!isFormValid}
          style={{
            opacity: isFormValid ? 1 : 0.5,
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
        >
          {loading ? 'Переходимо до оплати...' : 'Оплатити'}
        </ButtonPay>
      </CheckoutWrapper>
    </Container>
  );
};

export default CheckoutPage;
