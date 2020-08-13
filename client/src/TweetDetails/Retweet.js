import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const Retweet = (props) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <AiOutlineRetweet /> {props.profileUser.profile.displayName} Remeowed
      </div>
    );
  } else {
    return null;
  }
};

export default Retweet;
