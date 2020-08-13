import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetBio = (props) => {
  const { currentUser, profileUser, homeFeed } = React.useContext(
    CurrentUserContext
  );
  
  return (
    <div>
      {homeFeed ? homeFeed.tweetsById[props.tweetId].status : "Loading"}
    </div>
  );
};

export default BigTweetBio;
