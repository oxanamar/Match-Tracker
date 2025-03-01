import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchMatches } from "../shared/api/matchApi";
import { Match } from "../entities/match/types";
import MatchCard from "../entities/match/ui/MatchCard";
import RefreshButtonComponent from "../shared/ui/RefreshButton";
import ErrorMessage from "../shared/ui/ErrorMessage";
import Loader from "../shared/ui/Loader";

const Container = styled.div`
  width: 100%;
  min-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #010101;
  padding: 55px 50px;
  color: white;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

const ErrorRefreshWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: end;
  max-width: 100%;
  gap: 12px;

  @media (max-width: 1264px) and (min-width: 768px) {
    justify-content: end;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-style: italic;
  line-height: 32px;
  font-family: "Tactic Sans", sans-serif;
`;

const MatchListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MatchCardList = styled.div<{ loading: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-height: 582px;

  ${({ loading }) =>
    loading &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 500px; 
    `}
`;

const MatchCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMatches();
      setMatches(data.data.matches);
    } catch (err: unknown) {
      setError("Ошибка: не удалось загрузить информацию");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Title>Match Tracker</Title>

        <ErrorRefreshWrapper>
          <ErrorMessage message={error} />
          <RefreshButtonComponent
            loading={loading}
            disabled={loading}
            onClick={loadMatches}
          />
        </ErrorRefreshWrapper>
      </HeaderContainer>

      <MatchListContainer>
        <MatchCardList loading={loading}>
          {loading ? (
            <Loader />
          ) : (
            matches.map((match) => (
              <MatchCardWrapper key={match.title}>
                <MatchCard match={match} />
              </MatchCardWrapper>
            ))
          )}
        </MatchCardList>
      </MatchListContainer>
    </Container>
  );
};

export default MatchList;
