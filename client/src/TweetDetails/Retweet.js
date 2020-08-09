import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const Retweet = (props) => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);
  console.log(props);
  if (tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <AiOutlineRetweet /> {currentUser.profile.displayName} Remeowed
      </div>
    );
  } else {
    return null;
  }
};

export default Retweet;
