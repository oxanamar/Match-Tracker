import React from "react";
import styled from "styled-components";
import AlertIcon from "../../shared/assets/alert-triangle.svg";

const ErrorContainer = styled.div`
  width: 480px;
  height: 56px;
  background-color: #0f1318;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1264px) and (min-width: 768px) {
    margin-left: auto;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    white-space: normal;
    width: 100%;
    height: auto;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-left: 5px;
`;

const TextContainer = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;

  @media (max-width: 768px) {
    overflow: visible;
    text-overflow: unset;
    white-space: normal;
  }
`;

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <ErrorContainer>
      <Icon src={AlertIcon} alt="Error" />
      <TextContainer>{message}</TextContainer>
    </ErrorContainer>
  );
};

export default ErrorMessage;
