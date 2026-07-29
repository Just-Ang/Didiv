import { useEffect } from "react";
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
} from "./AuthModal.styled";

export const AuthModal = ({
  isOpen,
  onClose,
  mode,
  setMode,
}) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Title>
          {mode === "login" ? "Вхід" : "Реєстрація"}
        </Title>

        <Subtitle>
          {mode === "login"
            ? "Увійдіть до свого акаунта"
            : "Створіть новий акаунт"}
        </Subtitle>

        <Tabs>
          <Tab
            active={mode === "login"}
            onClick={() => setMode("login")}
          >
            Вхід
          </Tab>

          <Tab
            active={mode === "register"}
            onClick={() => setMode("register")}
          >
            Реєстрація
          </Tab>
        </Tabs>

        {mode === "register" && (
          <Input
            type="text"
            placeholder="Ім'я"
          />
        )}

        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Пароль"
        />

        {mode === "register" && (
          <Input
            type="password"
            placeholder="Повторіть пароль"
          />
        )}

        <SubmitButton>
          {mode === "login"
            ? "Увійти"
            : "Зареєструватися"}
        </SubmitButton>

        <BottomText>
          {mode === "login" ? (
            <>
              Немає акаунта?{" "}
              <span
                onClick={() =>
                  setMode("register")
                }
              >
                Зареєструватися
              </span>
            </>
          ) : (
            <>
              Вже є акаунт?{" "}
              <span
                onClick={() =>
                  setMode("login")
                }
              >
                Увійти
              </span>
            </>
          )}
        </BottomText>
      </Modal>
    </Backdrop>
  );
};