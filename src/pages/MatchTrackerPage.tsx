import React from "react";
import styled from "styled-components";
import MatchList from "../features/MatchList";

const PageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const MatchTrackerPage: React.FC = () => {
  return (
    <PageContainer>
      <MatchList />
    </PageContainer>
  );
};

export default MatchTrackerPage;
