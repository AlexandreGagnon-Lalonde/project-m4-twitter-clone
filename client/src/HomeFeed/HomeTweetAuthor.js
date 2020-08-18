import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../constants";

const { format } = require("date-fns");

const HomeTweetAuthor = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  let retweetUserDate = format(
    new Date(homeFeed.tweetsById[props.tweetId].author.joined),
    "MMM do"
  );
  return (
    <StyledDiv>
      <StyledAnchor to={`/${homeFeed.tweetsById[props.tweetId].author.handle}`}>
        {homeFeed.tweetsById[props.tweetId].author.displayName}
      </StyledAnchor>{" "}
      @{homeFeed.tweetsById[props.tweetId].author.handle} · {retweetUserDate}
    </StyledDiv>
  );
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

export default HomeTweetAuthor;
