import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";

const TweetButtons = (props) => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('buttonclick')
  }
  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}><FaRegCommentAlt /></StyledButton>
      <StyledButton onClick={handleClick}><AiOutlineRetweet /></StyledButton>
      <StyledButton onClick={handleClick}><FcLike /></StyledButton>
      <StyledButton onClick={handleClick}><FiUpload /></StyledButton>
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
