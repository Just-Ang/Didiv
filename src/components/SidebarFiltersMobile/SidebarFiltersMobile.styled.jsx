
import styled from "styled-components";



// стилі ті ж самі
export const Aside = styled.aside`
  width: 260px;
  padding: 16px;
  border-radius: 16px;
  background: #f8f8f8;
  @media (min-width: 768px) {
  display: none;
}

@media (max-width: 767px) {
   display: block;
   width: 100%;
        max-width: 380px;
        padding:10px;
}
  
`;

export const FilterBlock = styled.div`
  margin-bottom: 24px;
`;

export const FilterLabel = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;

// export const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 4px;
//   font-size: 14px;
// `;

export const SectionContent = styled.div`
  margin-top: 16px;
`;

export const PriceInputs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  input {
    width: 100%;
    padding: 8px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const Checkmark = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid #555555;
  border-radius: 2px;
  margin-right: 8px;
  position: relative;
  transition: all 0.2s;

  ${HiddenCheckbox}:checked + & {
    background-color: #85683d;
    border-color: #583d2d;
  }

  &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${HiddenCheckbox}:checked + &::after {
    opacity: 1;
  }
`;


export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const CheckboxLabel = styled.span`
  font-size: 16px;
`;
