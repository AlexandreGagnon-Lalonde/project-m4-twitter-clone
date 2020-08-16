import React from "react";

import styled from "styled-components";

import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";
import { COLORS } from '../constants';

const TweetButtons = (props) => {
  console.log("tweetButtons", props);
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
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FaRegCommentAlt /> <span>{null}</span>
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <AiOutlineRetweet />{" "}
          <StyledSpan>
            {props.tweetFeed.tweetsById[props.tweetId].numRetweets > 0
              ? props.tweetFeed.tweetsById[props.tweetId].numRetweets
              : null}
          </StyledSpan>
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FcLike />{" "}
          <StyledSpan>
            {props.tweetFeed.tweetsById[props.tweetId].numLikes > 0
              ? props.tweetFeed.tweetsById[props.tweetId].numLikes
              : null}
          </StyledSpan>
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FiUpload /> <span>{null}</span>
        </StyledButton>
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
  flex: 1;
  text-align: left;
  font-size: 18px;
  height: 40px;
  padding-left: 10px;
  background-color: ${COLORS.primary};
  width: 40px;
  border: none;
  border-radius: 50%;

`;
const ButtonContainerContainer = styled.div`
  width: 100%;
`
const StyledSpan = styled.span`
  display: block;
`
export default TweetButtons;
