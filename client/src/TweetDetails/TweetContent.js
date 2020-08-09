import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const TweetContent = (props) => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);

  return (
    <div>
      {tweetFeed.tweetsById[props.tweetId].media.length !== 0
        ? <img src={tweetFeed.tweetsById[props.tweetId].media[0].url}></img>
        : null}
    </div>
  );
};

export default TweetContent;
