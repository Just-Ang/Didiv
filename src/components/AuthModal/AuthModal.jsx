import { useEffect, useState } from 'react';
import {
  Backdrop,
  Modal,
  CloseButton,
  Title,
  Subtitle,
  Tabs,
  Tab,
  Input,
  SubmitButton,
  BottomText,
} from './AuthModal.styled';
import { Eye, EyeOff } from 'lucide-react';
import { InputWrapper } from './AuthModal.styled';
import { EyeButton } from './AuthModal.styled';
import { ToastContainer } from 'react-toastify';

export const AuthModal = ({
  isOpen,
  onClose,
  mode,
  setMode,
  localFavorites,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const syncFavorites = async (localFavorites, token, id) => {
    if (!localFavorites.length) return;

    // Отримуємо обране користувача з бекенду
    const favoritesRes = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/api/favorites?filters[user][documentId][$eq]=${id}&populate=product`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!favoritesRes.ok) {
      console.error(await favoritesRes.json());
      return;
    }

    const favoritesData = await favoritesRes.json();
    const backendFavorites = favoritesData.data;
    console.log('бекфев', backendFavorites);

    await Promise.all(
      localFavorites.map(async (item) => {
        // Перевіряємо, чи вже існує цей товар
        const exists = backendFavorites.some(
          (favorite) => favorite.product?.documentId === item.documentId
        );

        if (exists) return;

        // Якщо немає — додаємо
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/favorites`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                product: item.documentId,
                user: id,
              },
            }),
          }
        );

        if (!res.ok) {
          console.error(await res.json());
        }
      })
    );
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //log in

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error?.message || 'Помилка авторизації');
      return;
    }

    localStorage.setItem('token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    await syncFavorites(localFavorites, data.jwt, data.user.documentId);

    onClose();
  };
  /// register
  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert('Паролі не співпадають');
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/local/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.email,
          // first_name: form.first_name,
          // last_name: form.last_name,
          email: form.email,
          password: form.password,
        }),
      }
    );
    const data = await res.json();

    localStorage.setItem('token', data.jwt);
    try {
      const token = localStorage.getItem('token');
      localStorage.setItem('user', JSON.stringify(data.user));

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${data.user.id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: form.first_name,
            last_name: form.last_name,
          }),
        }
      );

      if (!res.ok) {
        throw new Error('Помилка оновлення');
      }
    } catch (err) {
      console.error(err);
      alert('Не вдалося оновити дані');
    }

    onClose();
  };

  return (
    <>
      {' '}
      <ToastContainer autoClose={1500} />
      <Backdrop onClick={handleBackdropClick}>
        <Modal>
          <CloseButton onClick={onClose}>×</CloseButton>

          <Title>{mode === 'login' ? 'Вхід' : 'Реєстрація'}</Title>

          <Subtitle>
            {mode === 'login'
              ? 'Увійдіть до свого акаунта'
              : 'Створіть новий акаунт'}
          </Subtitle>

          <Tabs>
            <Tab active={mode === 'login'} onClick={() => setMode('login')}>
              Вхід
            </Tab>

            <Tab
              active={mode === 'register'}
              onClick={() => setMode('register')}
            >
              Реєстрація
            </Tab>
          </Tabs>

          {mode === 'register' && (
            <>
              <Input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="Ім'я"
              />

              <Input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Прізвище"
              />
            </>
          )}

          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputWrapper>
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Пароль"
            />

            <EyeButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </EyeButton>
          </InputWrapper>

          {mode === 'register' && (
            <InputWrapper>
              <Input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Повторіть пароль"
              />

              <EyeButton
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </EyeButton>
            </InputWrapper>
          )}

          <SubmitButton
            onClick={mode === 'login' ? handleLogin : handleRegister}
          >
            {mode === 'login' ? 'Увійти' : 'Зареєструватися'}
          </SubmitButton>

          <BottomText>
            {mode === 'login' ? (
              <>
                Немає акаунта?{' '}
                <span onClick={() => setMode('register')}>Зареєструватися</span>
              </>
            ) : (
              <>
                Вже є акаунт?{' '}
                <span onClick={() => setMode('login')}>Увійти</span>
              </>
            )}
          </BottomText>
        </Modal>
      </Backdrop>{' '}
    </>
  );
};
