import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import {
  Wrapper,
  InputsRow,
  PriceInput,

  Track,
  Thumb
} from "./PriceRange.styled";

const MIN = 1340;
const MAX = 100340;
const STEP = 100;

export const PriceRange = () => {
  const [values, setValues] = useState([MIN, MAX]);

const handleInputChange = (index, value) => {
  const newValue = value === "" ? "" : Number(value);
  setValues((prev) => {
    const newVals = [...prev];
    newVals[index] = newValue;
    return newVals;
  });
};

const handleInputBlur = (index) => {
  setValues((prev) => {
    const newVals = [...prev];

    if (index === 0) {
      if (newVals[0] === "" || newVals[0] < MIN) newVals[0] = MIN;
      if (newVals[0] > prev[1] - STEP) newVals[0] = prev[1] - STEP;
    } else {
      if (newVals[1] === "" || newVals[1] > MAX) newVals[1] = MAX;
      if (newVals[1] < prev[0] + STEP) newVals[1] = prev[0] + STEP;
    }

    return newVals;
  });
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
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <Track
            {...props}
            background={getTrackBackground({
              values,
              colors: ["#ddd", "#85683d", "#ddd"],
              min: MIN,
              max: MAX
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