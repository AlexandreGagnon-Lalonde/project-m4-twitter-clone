import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorDisplayName = (props) => {
  const { profileUser, homeFeed, currentUser } = React.useContext(CurrentUserContext);
  console.log("homeFeed", homeFeed);
  return (
    <div>
      <a href={`/${homeFeed.tweetsById[props.tweetId].author.handle}`}>
        {homeFeed.tweetsById[props.tweetId].author.displayName}
      </a>
    </div>
  );
};

export default BigTweetAuthorDisplayName;
