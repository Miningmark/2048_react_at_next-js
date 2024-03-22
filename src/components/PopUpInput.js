import styled from "styled-components";
import { useState } from "react";

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
  text-align: center;
  color: black;
  width: 80%;
`;

const InputField = styled.input`
  width: 80%;
  padding: 8px;
  margin-bottom: 10px;
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

export default function NamePopup({ onConfirm, onCancel }) {
  const [name, setName] = useState("");

  const handleConfirm = () => {
    onConfirm(name);
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <p>Please enter your name:</p>
        <InputField type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </PopupContent>
    </PopupOverlay>
  );
}
