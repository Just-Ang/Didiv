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
import {
  EyeButton,
  InputWrapper,
} from '../ResetPasswordPage/ResetPasswordPage.styled';
import { Eye, EyeOff } from 'lucide-react';

const ChangePasswordPage = () => {
  const [showPasswordNow, setShowPasswordNow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
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

      const token = localStorage.getItem('token');

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
        throw new Error(data?.message || 'Не вдалося змінити пароль.');
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

        <Subtitle>Введіть поточний пароль і встановіть новий.</Subtitle>

        <Field>
          <Label htmlFor="currentPassword">Поточний пароль</Label>
          <InputWrapper>
            <Input
              id="currentPassword"
              name="currentPassword"
              type={showPasswordNow ? 'text' : 'password'}
              value={form.currentPassword}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Введіть поточний пароль"
            />
            <EyeButton
              type="button"
              onClick={() => setShowPasswordNow((prev) => !prev)}
            >
              {showPasswordNow ? <EyeOff size={20} /> : <Eye size={20} />}
            </EyeButton>
          </InputWrapper>
        </Field>

        <Field>
          <Label htmlFor="newPassword">Новий пароль</Label>
          <InputWrapper>
            <Input
              id="newPassword"
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={form.newPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="Введіть новий пароль"
            />
            <EyeButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </EyeButton>
          </InputWrapper>
        </Field>

        <Field>
          <Label htmlFor="confirmPassword">Підтвердження нового пароля</Label>

          <InputWrapper>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="Повторіть новий пароль"
            />
            <EyeButton
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </EyeButton>
          </InputWrapper>
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
