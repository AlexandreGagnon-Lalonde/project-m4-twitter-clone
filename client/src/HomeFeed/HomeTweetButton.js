import React from "react";

import styled from "styled-components";

import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";
import { COLORS } from "../constants";

const HomeTweetButton = (props) => {
  function handleLike(e) {
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
  function handleRetweet(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!props.retweeted) {
      fetch(`/api/tweet/${props.tweetId}/retweet`, {
        method: "PUT",
        body: JSON.stringify({
          retweet: true,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((state) => {
        props.setRetweeted(true);
      });
    } else {
      fetch(`/api/tweet/${props.tweetId}/retweet`, {
        method: "PUT",
        body: JSON.stringify({
          retweet: false,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((state) => {
        props.setRetweeted(false);
      });
    }
  }
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <ButtonContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FaRegCommentAlt />
        </StyledButton>
        <span>{null}</span>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleRetweet}>
          <AiOutlineRetweet />
        </StyledButton>
        <span>
          {props.homeFeed.tweetsById[props.tweetId].numRetweets > 0
            ? props.homeFeed.tweetsById[props.tweetId].numRetweets
            : null}
        </span>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleLike}>
          <FcLike />
        </StyledButton>
        <span>
          {props.homeFeed.tweetsById[props.tweetId].numLikes > 0
            ? props.homeFeed.tweetsById[props.tweetId].numLikes
            : null}
        </span>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FiUpload />
        </StyledButton>
        <span>{null}</span>
      </ButtonContainerContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: flex-start;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 18px;
  height: 40px;
  padding-left: 10px;
  background-color: lightgray;
  width: auto;
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: ${COLORS.loadingOrange};
    opacity: 0.7;
  }
`;
const ButtonContainerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export default HomeTweetButton;
