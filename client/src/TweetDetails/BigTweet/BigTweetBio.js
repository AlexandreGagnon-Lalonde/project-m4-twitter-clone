import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetBio = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  return (
    <StyledDiv>
      {homeFeed ? homeFeed.tweetsById[props.tweetId].status : "Loading"}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 0 0 10px 10px;
`;
export default BigTweetBio;
