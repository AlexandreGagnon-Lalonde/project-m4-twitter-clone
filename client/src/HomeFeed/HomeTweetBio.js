import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../constants";

const HomeTweetBio = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);
  return (
    <StyledDiv>
      {homeFeed ? homeFeed.tweetsById[props.tweetId].status : "Loading"}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 5px 1px;
  color: ${COLORS.black};
`;

export default HomeTweetBio;
