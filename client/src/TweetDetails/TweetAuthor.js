import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const { format } = require("date-fns");

const TweetAuthor = (props) => {
  let profileUserDate = format(
    new Date(props.profileUser.profile.joined),
    "MMM do"
  );
  let retweetUserDate = format(
    new Date(props.tweetFeed.tweetsById[props.tweetId].author.joined),
    "MMM do"
  );
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <StyledDiv>
        <StyledAnchor
          to={`/${props.tweetFeed.tweetsById[props.tweetId].author.handle}`}
        >
          {props.tweetFeed.tweetsById[props.tweetId].author.displayName}
        </StyledAnchor>{" "}
        @{props.tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <StyledAnchor to={`/${props.profileUser.profile.handle}`}>
          {props.profileUser.profile.displayName}
        </StyledAnchor>{" "}
        @{props.profileUser.profile.handle} · Joined {profileUserDate}
      </StyledDiv>
    );
  }
};

const StyledAnchor = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${COLORS.black};
  font-size: 16px;
`;
const StyledDiv = styled.div`
  margin: 10px 1px 5px 0;
  color: lightgray;
`;

export default TweetAuthor;
