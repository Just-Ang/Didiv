import { Range, getTrackBackground } from 'react-range';
import { useState, useEffect } from 'react';
import {
  Wrapper,
  InputsRow,
  PriceInput,
  Track,
  Thumb,
} from './PriceRange.styled';

export const PriceRange = ({ childValues, onChange }) => {
  const DEFAULT_MIN = 1340;
  const DEFAULT_MAX = 100340;
  const STEP = 100;

const MIN = childValues?.[0] ?? DEFAULT_MIN;
const MAX = childValues?.[1] ?? DEFAULT_MAX;

  const [values, setValues] = useState([MIN, MAX]);

  // Щоб значення оновлювалось, якщо прийшли нові childValues
  useEffect(() => {
    if (childValues && childValues.length === 2) {
      setValues(childValues);
      if (onChange) onChange(childValues); // одразу прокидаємо в CategoryPage
    }
  }, [childValues]);

  const handleValuesChange = (newValues) => {
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  const handleInputChange = (index, value) => {
    const newValue = value === '' ? '' : Number(value);
    const newVals = [...values];
    newVals[index] = newValue;
    handleValuesChange(newVals);
  };

  const handleInputBlur = (index) => {
    const newVals = [...values];
    if (index === 0) {
      if (newVals[0] === '' || newVals[0] < MIN) newVals[0] = MIN;
      if (newVals[0] > newVals[1] - STEP) newVals[0] = newVals[1] - STEP;
    } else {
      if (newVals[1] === '' || newVals[1] > MAX) newVals[1] = MAX;
      if (newVals[1] < newVals[0] + STEP) newVals[1] = newVals[0] + STEP;
    }
    handleValuesChange(newVals);
  };

  return (
    <Wrapper>
      <InputsRow>
        <PriceInput
          type="number"
          value={values[0]}
          min={MIN}
          max={values[1]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          onBlur={() => handleInputBlur(0)}
        />
        <PriceInput
          type="number"
          value={values[1]}
          min={values[0]}
          max={MAX}
          onChange={(e) => handleInputChange(1, e.target.value)}
          onBlur={() => handleInputBlur(1)}
        />
      </InputsRow>

      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleValuesChange} // повідомляємо батька
        renderTrack={({ props, children }) => (
          <Track
            {...props}
            background={getTrackBackground({
              values,
              colors: ['#ddd', '#85683d', '#ddd'],
              min: MIN,
              max: MAX,
            })}
          >
            {children}
          </Track>
        )}
        renderThumb={({ props }) => <Thumb {...props} />}
      />
    </Wrapper>
  );
};