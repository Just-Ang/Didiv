import Select from 'react-select';
import { InputGroup, Label } from './CitySelect.styled';
const CitySelect = ({ cityOptions, selectedCity, onChange, onInputChange }) => (
  <InputGroup>
    <Label>Місто</Label>
    <Select
      options={cityOptions}
      onInputChange={onInputChange}
      onChange={onChange}
      placeholder="Почніть вводити місто..."
      value={selectedCity}
      noOptionsMessage={() => 'Введіть назву міста'}
    />
  </InputGroup>
);
export default CitySelect;