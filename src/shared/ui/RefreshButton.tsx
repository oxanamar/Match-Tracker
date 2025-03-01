import React from "react";
import styled, { keyframes, css } from "styled-components";
import RefreshIcon from "../../shared/assets/Refresh.svg";
import RefreshDisabledIcon from "../../shared/assets/RefreshDisabled.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg); 
  }
`;

const RefreshButton = styled.button<{ $loading: boolean }>`
  background: ${({ $loading }) => ($loading ? "#A01131" : "#EB0237")};
  color: ${({ $loading }) => ($loading ? "#FFFFFF" : "#FFFFFF")};
  width: 204px;
  height: 56px;
  font-weight: 600;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  line-height: 21.78px;
  border: none;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  transition: background 0.3s, transform 0.1s, color 0.3s;

  &:hover {
    background: ${({ $loading }) => ($loading ? "#A01131" : "#A01131")};
  }

  &:active {
    transform: ${({ $loading }) => ($loading ? "none" : "scale(0.95)")};
  }

  &:disabled {
    background: #701328;
    color: #787878;
    cursor: not-allowed;
  }
`;

const Icon = styled.img<{ $loading: boolean }>`
  width: 20px;
  height: auto;

  ${({ $loading }) =>
    $loading &&
    css`
      animation: ${rotate} 1s linear infinite;
    `}
`;

interface ButtonProps {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const RefreshButtonComponent: React.FC<ButtonProps> = ({
  loading,
  disabled,
  onClick,
}) => {
  return (
    <RefreshButton
      type="button"
      onClick={onClick}
      $loading={loading}
      disabled={disabled}
    >
      Обновить
      <Icon
        src={disabled ? RefreshDisabledIcon : RefreshIcon}
        alt="Refresh Icon"
        $loading={loading}
      />
    </RefreshButton>
  );
};

export default RefreshButtonComponent;
