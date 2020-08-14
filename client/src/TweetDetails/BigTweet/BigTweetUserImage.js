import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetUserImage = (props) => {
  const { homeFeed } = React.useContext(
    CurrentUserContext
  );
  return (
    <StyledImage
      src={homeFeed.tweetsById[props.tweetId].author.avatarSrc}
    ></StyledImage>
  );
};

const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;
export default BigTweetUserImage;
