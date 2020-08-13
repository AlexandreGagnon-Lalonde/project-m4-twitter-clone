import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const HomeTweetUserImage = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);

  const authorAvatarSrc = homeFeed.tweetsById[props.tweetId].author.avatarSrc;
  
  return <StyledImage src={authorAvatarSrc}></StyledImage>;
};

const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;
export default HomeTweetUserImage;
