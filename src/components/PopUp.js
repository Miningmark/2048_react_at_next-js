import styled from "styled-components";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export default function ConfirmationPopup({
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) {
  return (
    <PopupOverlay>
      <PopupContent>
        <p>{message}</p>
        <Button onClick={onConfirm}>{confirmText ? confirmText : "Confirm"}</Button>
        <Button onClick={onCancel}>{cancelText ? cancelText : "Cancel"}</Button>
      </PopupContent>
    </PopupOverlay>
  );
}
