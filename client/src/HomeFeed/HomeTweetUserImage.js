import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

const HomeTweetUserImage = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  const authorAvatarSrc = homeFeed.tweetsById[props.tweetId].author.avatarSrc;
  
  return <StyledImage src={authorAvatarSrc}></StyledImage>;
};

const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
  margin: 10px;
`;
export default HomeTweetUserImage;
