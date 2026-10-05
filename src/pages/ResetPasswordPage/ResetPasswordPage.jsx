import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Container,
  Content,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  InputWrapper,
  EyeButton,
} from './ResetPasswordPage.styled';
import { Eye, EyeOff } from 'lucide-react';

const ResetPasswordPage = ({ openLogin }) => {
  const [searchParams] = useSearchParams();
  
 const navigate = useNavigate();

  const code = searchParams.get('code');

  const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setError('');

    if (!code) {
      setError('Посилання для відновлення пароля недійсне.');
      return;
    }

    if (password.length < 6) {
      setError('Пароль має містити щонайменше 6 символів.');
      return;
    }

    if (password !== passwordConfirmation) {
      setError('Паролі не збігаються.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            password,
            passwordConfirmation,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || 'Не вдалося змінити пароль.'
        );
      }

      setSuccess(true);

      setTimeout(() => {
        navigate('/');
       openLogin();
      }, 2500);
    } catch (error) {
      setError('Сталася помилка. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        {!success ? (
          <>
            <Title>Новий пароль</Title>

            <Subtitle>
              Введіть новий пароль для вашого облікового запису.
            </Subtitle>

            <Form onSubmit={handleSubmit}>
              <Label>
                Новий пароль
                <InputWrapper>
                <Input
                type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Введіть новий пароль"
                  autoComplete="new-password"
                />
                <EyeButton
        type="button"
        onClick={() => setShowPassword(prev => !prev)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </EyeButton> </InputWrapper> 
              </Label>
 
              <Label>
                Повторіть пароль
               <InputWrapper><Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                  placeholder="Повторіть новий пароль"
                  autoComplete="new-password"
                />
                 <EyeButton
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                              >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </EyeButton></InputWrapper>
              </Label>

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <Button type="submit" disabled={loading}>
                {loading ? 'Збереження...' : 'Змінити пароль'}
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Title>Пароль змінено</Title>

            <SuccessMessage>
              Ваш пароль успішно змінено. Зараз ви будете перенаправлені
              на сторінку входу.
            </SuccessMessage>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ResetPasswordPage;