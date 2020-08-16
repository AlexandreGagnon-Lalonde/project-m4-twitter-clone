import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../CurrentUserContext";

const { format } = require("date-fns");

const BigTweetTime = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  const time =
    format(new Date(homeFeed.tweetsById[props.tweetId].timestamp), "h:mm") +
    " PM";
  const date = format(
    new Date(homeFeed.tweetsById[props.tweetId].timestamp),
    "LLL d y"
  );

  return (
    <StyledDiv>
      {homeFeed ? `${time} · ${date} · Critter web app` : "Loading"}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 10px;
`;

export default BigTweetTime;
