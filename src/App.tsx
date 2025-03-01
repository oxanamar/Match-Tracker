import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import MatchTrackerPage from "./pages/MatchTrackerPage";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Tactic Sans";
    src: url("/fonts/TacticSans-Bld.woff2") format("woff2");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src:url("/fonts/Inter-Regular.woff2") format("woff2");
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: #171717;  
    color: #fff;
    font-family: "Inter", sans-serif; 
  }
`;

const AppContainer = styled.div`
  max-width: 2120px;
  width: 100%;
  font-family: "Inter", sans-serif;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MatchTrackerPage />
      </AppContainer>
    </>
  );
};

export default App;
