import React from "react";
import styled from "styled-components";
import { Match } from "../../match/types";
import TeamLogoImg from "../../../shared/assets/icon.svg";

const CardWrapper = styled.div`
  height: 87px;
  width: 100%;
  padding: 16px;
  background-color: #0b0e12;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 1764px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1764px) {
    width: 100%;
    max-width: 100%;
  }
`;

const TeamName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TeamLogo = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 140px;
`;

const Score = styled.div`
  padding-bottom: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.2px;
  text-align: center;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.52px;
  text-align: center;
  text-transform: capitalize;
  color: #fff;

  ${({ status }) =>
    status === "Ongoing"
      ? `background: #43AD28;
         width: 92px;
         height: 27px;
         padding: 6px 2px;
         `
      : status === "Finished"
      ? `background: #EB0237;
         width: 92px;
         height: 27px;
         padding: 6px 2px;`
      : `background: #EB6402;
         padding: 6px 8px;
         width: 112px;
         height: 27px;
         `}
`;

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  const getStatusText = (status: string) => {
    if (status === "Ongoing") return "Live";
    if (status === "Finished") return "Finished";
    return "Match preparing";
  };

  return (
    <CardWrapper>
      <Card>
        <TeamName>
          <TeamLogo src={TeamLogoImg} alt="TeamLogo" />
          Command №1
        </TeamName>
        <CenterColumn>
          <Score>
            {match.homeScore} : {match.awayScore}
          </Score>
          <StatusBadge status={match.status}>
            {getStatusText(match.status)}
          </StatusBadge>
        </CenterColumn>{" "}
        <TeamName>
          Command №2
          <TeamLogo src={TeamLogoImg} alt="TeamLogo" />
        </TeamName>
      </Card>
    </CardWrapper>
  );
};

export default MatchCard;
