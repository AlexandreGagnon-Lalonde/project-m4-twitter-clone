import React from "react";

import styled from "styled-components";

import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";
import ErrorScreen from '../../ErrorScreen/ErrorScreen'

const BigTweetButtons = (props) => {
  const [bigTweetButtonError, setBigTweetButtonError] = React.useState(false);

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
      })
        .then((state) => {
          props.setTweetLike(true);
        })
        .catch((err) => {
          console.log(err);
          setBigTweetButtonError(true);
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
      })
        .then((state) => {
          props.setTweetLike(false);
        })
        .catch((err) => {
          console.log(err);
          setBigTweetButtonError(true);
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
      })
        .then((state) => {
          props.setRetweeted(true);
        })
        .catch((err) => {
          console.log(err);
          setBigTweetButtonError(true);
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
      })
        .then((state) => {
          props.setRetweeted(false);
        })
        .catch((err) => {
          console.log(err);
          setBigTweetButtonError(true);
        });
    }
  }
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <>
      {bigTweetButtonError ? (
        <ErrorScreen></ErrorScreen>
      ) : (
        <ButtonContainer>
          <ButtonContainerContainer>
            <StyledButton onClick={handleClick}>
              <FaRegCommentAlt />
            </StyledButton>
          </ButtonContainerContainer>
          <ButtonContainerContainer>
            <StyledButton onClick={handleRetweet}>
              <AiOutlineRetweet />
            </StyledButton>
            <span>
              {props.tweetFeed.tweetsById[props.tweetId].numRetweets > 0
                ? props.tweetFeed.tweetsById[props.tweetId].numRetweets
                : null}
            </span>
          </ButtonContainerContainer>
          <ButtonContainerContainer>
            <StyledButton onClick={handleLike}>
              <FcLike />
            </StyledButton>
            <span>
              {props.tweetFeed.tweetsById[props.tweetId].numLikes > 0
                ? props.tweetFeed.tweetsById[props.tweetId].numLikes
                : null}
            </span>
          </ButtonContainerContainer>
          <ButtonContainerContainer>
            <StyledButton onClick={handleClick}>
              <FiUpload />
            </StyledButton>
          </ButtonContainerContainer>
        </ButtonContainer>
      )}
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0;
  margin-left: 10px;
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
  width: 40px;
  border: none;
  border-radius: 50%;
`;
const ButtonContainerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export default BigTweetButtons;
