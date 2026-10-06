import { useState } from 'react';

import {
  Container,

  Form,
  Title,
  Subtitle,
  Field,
  Label,
  Input,
  SubmitButton,

  Message,
  ErrorMessage,
} from './ChangePasswordPage.styled';

const ChangePasswordPage = () => {
 

  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSuccess('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (
      !form.currentPassword ||
      !form.newPassword ||
      !form.confirmPassword
    ) {
      setError('Заповніть усі поля.');
      return;
    }

    if (form.newPassword.length < 6) {
      setError('Новий пароль повинен містити щонайменше 6 символів.');
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError('Нові паролі не співпадають.');
      return;
    }

    if (form.currentPassword === form.newPassword) {
      setError('Новий пароль повинен відрізнятися від поточного.');
      return;
    }

    try {
      setLoading(true);

   const token = localStorage.getItem("token");

const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/auth/change-password`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      currentPassword: form.currentPassword,
      password: form.newPassword,
      passwordConfirmation: form.newPassword,
    }),
  }
);

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || 'Не вдалося змінити пароль.'
        );
      }

      setSuccess('Пароль успішно змінено.');

      setForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError(err.message || 'Сталася помилка. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Зміна пароля</Title>

          <Subtitle>
            Введіть поточний пароль і встановіть новий.
          </Subtitle>

          <Field>
            <Label htmlFor="currentPassword">
              Поточний пароль
            </Label>

            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={form.currentPassword}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Введіть поточний пароль"
            />
          </Field>

          <Field>
            <Label htmlFor="newPassword">
              Новий пароль
            </Label>

            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="Введіть новий пароль"
            />
          </Field>

          <Field>
            <Label htmlFor="confirmPassword">
              Підтвердження нового пароля
            </Label>

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="Повторіть новий пароль"
            />
          </Field>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {success && <Message>{success}</Message>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Зміна пароля...' : 'Змінити пароль'}
          </SubmitButton>


        </Form>
      </Container>
    
  );
};

export default ChangePasswordPage;