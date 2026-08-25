export const formatPhone = (phone) => {
  if (!phone) return '';

  const digits = phone.replace(/\D/g, '');

  if (digits.length !== 10) return phone;

  return `+38 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
    6,
    8
  )}-${digits.slice(8, 10)}`;
};