import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";

const TweetButtons = () => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);

  return (
    <ButtonContainer>
      <StyledButton><FaRegCommentAlt /></StyledButton>
      <StyledButton><AiOutlineRetweet /></StyledButton>
      <StyledButton><FcLike /></StyledButton>
      <StyledButton><FiUpload /></StyledButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
`
const StyledButton = styled.button`
  flex: 1;
`
export default TweetButtons;
