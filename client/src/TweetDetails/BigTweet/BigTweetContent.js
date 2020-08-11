import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetContent = (props) => {
  const { tweetFeed, currentUser, profileUser, homeFeed } = React.useContext(
    CurrentUserContext
  );
  return (
    <div>
      {homeFeed.tweetsById[props.tweetId].media.length !== 0 ? (
        <img src={homeFeed.tweetsById[props.tweetId].media[0].url}></img>
      ) : null}
    </div>
  );
};

export default BigTweetContent;
