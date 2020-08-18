import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const TweetBio = (props) => {
  return (
    <StyledDiv>
      {props.tweetFeed
        ? props.tweetFeed.tweetsById[props.tweetId].status
        : "Loading"}
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  margin: 5px 1px;
  color: ${COLORS.black};
`;

export default TweetBio;
