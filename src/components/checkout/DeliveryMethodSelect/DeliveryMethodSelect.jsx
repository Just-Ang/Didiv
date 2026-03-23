import { InputGroup, Label } from "./DeliveryMethodSelect.styled";
import Select from 'react-select';

const DeliveryMethodSelect = ({ options = [], value, onChange, selectedCity })  => (
  <InputGroup>
    <Label>Спосіб доставки</Label>
    <Select
      options={options}
      placeholder="Оберіть спосіб доставки..."
      isDisabled={!selectedCity}
 value={options.find(opt => opt.value === value) || null}
         onChange={(option) => onChange(option.value)}
    />
  </InputGroup>
);
export default DeliveryMethodSelect;