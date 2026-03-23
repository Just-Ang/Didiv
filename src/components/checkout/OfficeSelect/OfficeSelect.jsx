import Select from 'react-select';
import { InputGroup, Label } from './OfficeSelect.styled';
const OfficeSelect = ({
  deliveryMethod,
  officeOptions,
  ukrOfficeOptions,
  selectedOffice,
  selectedUkrOffice,
  setSelectedOffice,
  setSelectedUkrOffice
}) => {
  if (deliveryMethod === 'nova') {
    return (
      <InputGroup>
        <Label>Відділення Нової пошти</Label>
        <Select
          options={officeOptions}
          onChange={(option) => setSelectedOffice(option)}
          value={selectedOffice}
          placeholder="Оберіть відділення..."
        />
      </InputGroup>
    );
  }

  if (deliveryMethod === 'ukr') {
    return (
      <InputGroup>
        <Label>Відділення Укрпошти</Label>
        <Select
          options={ukrOfficeOptions}
          onChange={(option) => setSelectedUkrOffice(option)}
          value={selectedUkrOffice}
          placeholder="Оберіть відділення..."
        />
      </InputGroup>
    );
  }

  if (deliveryMethod === 'pickup') {
    return (
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
    );
  }

  return null;
};

export default OfficeSelect;