import Select from 'react-select';

const PaymentMethodSelect = ({ options, value, onChange, error }) => {
  const selectedOption = options.find((o) => o.value === value) || null;

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>
        Спосіб оплати
      </label>

      <Select
        options={options}
        value={selectedOption}
        onChange={(option) => onChange(option?.value)}
        placeholder="Оберіть спосіб оплати"
        styles={{
          control: (base) => ({
            ...base,
            borderColor: error ? 'red' : base.borderColor,
          }),
        }}
      />

      {error && (
        <span style={{ color: 'red', fontSize: '12px' }}>
          Оберіть спосіб оплати
        </span>
      )}
    </div>
  );
};

export default PaymentMethodSelect;