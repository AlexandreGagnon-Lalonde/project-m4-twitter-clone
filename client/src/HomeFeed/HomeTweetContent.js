import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const HomeTweetContent = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);

  const mediaArrayLength = homeFeed.tweetsById[props.tweetId].media.length;
  const mediaUrl = homeFeed.tweetsById[props.tweetId].media[0].url;

  return (
    <div>{mediaArrayLength !== 0 ? <img src={mediaUrl}></img> : null}</div>
  );
};

export default HomeTweetContent;
