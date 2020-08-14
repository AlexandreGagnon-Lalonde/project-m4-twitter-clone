import React from "react";

import styled from "styled-components";

const TweetUserImage = (props) => {
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <StyledImage
        src={props.tweetFeed.tweetsById[props.tweetId].author.avatarSrc}
      ></StyledImage>
    );
  } else {
    return (
      <StyledImage src={props.profileUser.profile.avatarSrc}></StyledImage>
    );
  }
};

const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;
export default TweetUserImage;
