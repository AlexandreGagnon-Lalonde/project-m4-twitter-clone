import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorHandle = (props) => {
  const { profileUser, homeFeed } = React.useContext(CurrentUserContext);
  return (
    <div>
      @{homeFeed.tweetsById[props.tweetId].author.handle}
    </div>
  );
};

export default BigTweetAuthorHandle;
