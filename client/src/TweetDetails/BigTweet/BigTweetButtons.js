import React from "react";

import styled from "styled-components";

import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";

const BigTweetButtons = (props) => {
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!props.tweetLike) {
      fetch(`/api/tweet/${props.tweetId}/like`, {
        method: "PUT",
        body: JSON.stringify({
          like: true,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((state) => {
        props.setTweetLike(true);
      });
    } else {
      fetch(`/api/tweet/${props.tweetId}/like`, {
        method: "PUT",
        body: JSON.stringify({
          like: false,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((state) => {
        props.setTweetLike(false);
      });
    }
  }

  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}>
        <FaRegCommentAlt />
      </StyledButton>
      <StyledButton onClick={handleClick}>
        <AiOutlineRetweet />
      </StyledButton>
      <StyledButton onClick={handleClick}>
        <FcLike />
      </StyledButton>
      <StyledButton onClick={handleClick}>
        <FiUpload />
      </StyledButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  flex: 1;
`;
export default BigTweetButtons;
