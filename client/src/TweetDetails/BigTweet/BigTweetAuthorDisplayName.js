import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorDisplayName = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  const authorHandle = homeFeed.tweetsById[props.tweetId].author.handle;
  const authorDisplayName = homeFeed.tweetsById[props.tweetId].author.displayName;

  return (
    <div>
      <a href={`/${authorHandle}`}>{authorDisplayName}</a>
    </div>
  );
};

export default BigTweetAuthorDisplayName;
