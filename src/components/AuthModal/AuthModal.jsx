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
  ErrorText,
  ForgotPassword,
} from './AuthModal.styled';
import { Eye, EyeOff } from 'lucide-react';
import { InputWrapper } from './AuthModal.styled';
import { EyeButton } from './AuthModal.styled';
import { ToastContainer } from 'react-toastify';
import { syncFavorites } from '../../api/utils/syncFavorites';
import { syncCart } from '../../api/utils/syncCart';
import { fetchUserCart } from '../../api/utils/fetchUserCart';
import { setCartItems } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

export const AuthModal = ({
  isOpen,
  onClose,
  mode,
  setMode,
  localFavorites,
  localCartItems,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
});
console.log(errors);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
const dispatch = useDispatch();
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
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: '',
  }));
};

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //log in

//   const handleLogin = async () => {
//     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/local`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         identifier: form.email,
//         password: form.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert(data.error?.message || 'Помилка авторизації');
//       return;
//     }

//     localStorage.setItem('token', data.jwt);
//     localStorage.setItem('user', JSON.stringify(data.user));

//     await syncFavorites(localFavorites, data.jwt, data.user.documentId);
//     await syncCart(localCartItems, data.jwt, data.user.documentId);
//     const backendCart = await fetchUserCart(
//   data.jwt,
//   data.user.documentId
// );

// dispatch(setCartItems(backendCart));

//     onClose();
//   };
const handleLogin = async () => {
  setErrors({
     first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  });

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/local`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: form.email,
        password: form.password,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    setErrors({
      email: 'Неправильна електронна пошта або пароль',
      password: 'Неправильна електронна пошта або пароль',
      confirmPassword: '',
    });

    return;
  }

  localStorage.setItem('token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  await syncFavorites(
    localFavorites,
    data.jwt,
    data.user.documentId
  );

  await syncCart(
    localCartItems,
    data.jwt,
    data.user.documentId
  );

  const backendCart = await fetchUserCart(
    data.jwt,
    data.user.documentId
  );

  dispatch(setCartItems(backendCart));

  onClose();
};
  /// register
 const handleRegister = async () => {
  
  setErrors({
    email: '',
    password: '',
    confirmPassword: '',
  });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.first_name.trim()) {
  setErrors((prev) => ({
    ...prev,
    first_name: "Введіть ім'я",
  }));
  return;
}

if (!form.last_name.trim()) {
  setErrors((prev) => ({
    ...prev,
    last_name: 'Введіть прізвище',
  }));
  return;
} 
 if (!form.email.trim()) {
    setErrors((prev) => ({
      ...prev,
      email: 'Введіть електронну пошту',
    }));
    return;
  }

  if (!emailRegex.test(form.email)) {
    setErrors((prev) => ({
      ...prev,
      email: 'Введіть правильну електронну пошту',
    }));
    return;
  }

   if (!form.password) {
    setErrors((prev) => ({
      ...prev,
      password: 'Введіть пароль',
    }));
    return;
  }

  if (form.password.length < 6) {
    setErrors((prev) => ({
      ...prev,
      password: 'Пароль має містити щонайменше 6 символів',
    }));
    return;
  }

  if (form.password !== form.confirmPassword) {
    setErrors((prev) => ({
      ...prev,
      confirmPassword: 'Паролі не співпадають',
    }));

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
        email: form.email,
        password: form.password,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    if (
      data.error?.message?.toLowerCase().includes('already') ||
      data.error?.message?.toLowerCase().includes('taken') ||
      data.error?.message?.toLowerCase().includes('email')
    ) {
      setErrors((prev) => ({
        ...prev,
        email: 'Ця пошта вже зареєстрована',
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: data.error?.message || 'Не вдалося зареєструватися',
      }));
    }

    return;
  }

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

    const updatedUser = await res.json();

    localStorage.setItem('user', JSON.stringify(updatedUser));
  } catch (err) {
    console.error(err);
    alert('Не вдалося оновити дані');
  }

  onClose();
};


const handleForgotPassword = async () => {
  setErrors({
    email: '',
    password: '',
    confirmPassword: '',
  });

  if (!form.email.trim()) {
    setErrors(prev => ({
      ...prev,
      email: 'Введіть електронну пошту',
    }));
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email)) {
    setErrors(prev => ({
      ...prev,
      email: 'Введіть правильну електронну пошту',
    }));
    return;
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
        }),
      }
    );

    const data = await res.json();
     console.log('Forgot password response:', data);

    if (!res.ok) {
      setErrors(prev => ({
        ...prev,
        email: data.error?.message || 'Не вдалося надіслати лист',
      }));
      return;
    }

    // успішно
    alert('Лист для відновлення пароля надіслано на вашу пошту');

  } catch (error) {
    console.error(error);

    setErrors(prev => ({
      ...prev,
      email: 'Помилка з’єднання із сервером',
    }));
  }
};  
  return (
    <>
      {' '}
      <ToastContainer autoClose={1500} />
      <Backdrop onClick={handleBackdropClick}>
        <Modal>
          <CloseButton onClick={onClose}>×</CloseButton>

      <Title>
  {mode === 'login'
    ? 'Вхід'
    : mode === 'register'
    ? 'Реєстрація'
    : 'Відновлення пароля'}
</Title>

          <Subtitle>
  {mode === 'login'
    ? 'Увійдіть до свого акаунта'
    : mode === 'register'
    ? 'Створіть новий акаунт'
    : 'Введіть email, щоб отримати посилання для відновлення пароля'}
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
              {errors.first_name && (
  <ErrorText>{errors.first_name}</ErrorText>
)}

              <Input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Прізвище"
              />

{errors.last_name && (
  <ErrorText>{errors.last_name}</ErrorText>
)}
            </>
          )}

          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
  
         {mode !== 'forgotPassword' && (
  <>
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
        onClick={() => setShowPassword(prev => !prev)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </EyeButton>
    </InputWrapper>

    {errors.password && (
      <ErrorText>{errors.password}</ErrorText>
    )}
  </>
)}

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
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </EyeButton>
            </InputWrapper>
          )}
          {errors.confirmPassword && (
  <ErrorText>{errors.confirmPassword}</ErrorText>
)}
{mode === 'login' && <ForgotPassword>
  <span onClick={() => setMode('forgotPassword')}>
    Забули пароль?
  </span>
</ForgotPassword>}
         <SubmitButton
  onClick={
    mode === 'login'
      ? handleLogin
      : mode === 'register'
      ? handleRegister
      : handleForgotPassword
  }
>
  {mode === 'login'
    ? 'Увійти'
    : mode === 'register'
    ? 'Зареєструватися'
    : 'Надіслати посилання'}
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
