import React from "react";

import styled from "styled-components";

const Assets = () => {
  return (
    <AssetsContainer>
      <StyledButton>Tweets</StyledButton>
      <StyledButton>Media</StyledButton>
      <StyledButton>Likes</StyledButton>
    </AssetsContainer>
  );
};

const AssetsContainer = styled.div`
  display: flex;
  flex: 1;
`;
const StyledButton = styled.button`
  flex: 1;
  color: black;
  font-weight: bold;
  background-color: white;
  border: none;
  height: 40px;
`;

export default Assets;
