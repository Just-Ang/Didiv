import ReactInputMask from "react-input-mask";
import { ErrorText, InputForm, InputGroup, Label } from "./ContactForm.styled";

// ContactForm.jsx
const ContactForm = ({ formData, setFormData,  errors }) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone' && !value.startsWith('+38 (0')) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 return (

  <>
    <h3>Контактні дані</h3>
    <InputGroup>
      <Label>Прізвище та ім’я</Label>
      <InputForm
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Прізвище Ім'я"
          autoComplete="name"
      />
      {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
    </InputGroup>
    <InputGroup>
      <Label>Номер телефону</Label>
      <ReactInputMask
        mask="+38 (099) 999-99-99"
        maskChar="_"
        name="phone"
        autoComplete="tel"
        value={formData.phone}
        onChange={handleChange}
      >
        {(inputProps) => <InputForm {...inputProps} type="tel" />}
      </ReactInputMask>
      {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
    </InputGroup>
    <InputGroup>
      <Label>E-mail</Label>
      <InputForm
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email@example.com"
        autoComplete="email"
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
    </InputGroup>
  </>
)};
export default ContactForm;