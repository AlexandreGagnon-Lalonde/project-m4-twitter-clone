import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { COLORS } from "../../constants";
import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorDisplayName = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  const authorHandle = homeFeed.tweetsById[props.tweetId].author.handle;
  const authorDisplayName =
    homeFeed.tweetsById[props.tweetId].author.displayName;

  return (
    <>
      <StyledAnchor to={`/${authorHandle}`}>{authorDisplayName}</StyledAnchor>
    </>
  );
};

const StyledAnchor = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${COLORS.black};
  font-size: 16px;
`;

export default BigTweetAuthorDisplayName;
