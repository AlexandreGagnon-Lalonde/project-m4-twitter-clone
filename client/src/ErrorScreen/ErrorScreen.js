import React from "react";

import styled from "styled-components";

import { FaBomb } from "react-icons/fa";

const ErrorScreen = () => {

  return (
    <StyledDiv>
      <FaBomb size={100} />
      <StyledP>An unknown error has occured</StyledP>
      <StyledP>
        Please try refreshing the page, or contact support if the problem persists.
      </StyledP>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StyledP = styled.p`
  margin: 15px;
  font-weight: bold;
  font-size: 20px;
`;
export default ErrorScreen;
