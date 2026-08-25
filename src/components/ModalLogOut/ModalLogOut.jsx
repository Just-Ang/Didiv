import { CancelButton, ConfirmButton, LogoutModal, ModalButtons, ModalOverlay, ModalText, ModalTitle } from "./ModalLogOut.styled"

export const ModalLogOut = ({ onClose, onConfirm }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <LogoutModal onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Вийти з акаунту?</ModalTitle>

        <ModalText>
          Ви впевнені, що хочете вийти з особистого кабінету?
        </ModalText>

        <ModalButtons>
          <CancelButton onClick={onClose}>
            Скасувати
          </CancelButton>

          <ConfirmButton onClick={onConfirm}>
            Вийти
          </ConfirmButton>
        </ModalButtons>
      </LogoutModal>
    </ModalOverlay>
  );
};