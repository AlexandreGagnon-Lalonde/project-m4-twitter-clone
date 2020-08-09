import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const TweetUserImage = (props) => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);
  if (tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <StyledImage src={tweetFeed.tweetsById[props.tweetId].author.avatarSrc}></StyledImage>
    );
  } else {
    return <StyledImage src={currentUser.profile.avatarSrc}></StyledImage>
  }
}

const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
`
export default TweetUserImage