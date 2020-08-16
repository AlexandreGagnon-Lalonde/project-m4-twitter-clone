import React from "react";
import { CurrentUserContext } from "../CurrentUserContext";

import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import BigTweet from "./BigTweet/BigTweet";
import LoadingIcon from '../LoadingFiller/LoadingFiller'

const TweetDetails = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  let tweetId = window.location.pathname.substr(7);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {homeFeed ? (
        <BigTweet
          tweetId={tweetId}
          tweetFeed={homeFeed}
          tweetLike={props.tweetLike}
          setTweetLike={props.setTweetLike}
        ></BigTweet>
      ) : (
        <LoadingIcon></LoadingIcon>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default TweetDetails;
