import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";

import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import BigTweet from "./BigTweet/BigTweet";

const TweetDetails = (props) => {
  const { currentUser, homeFeed } = React.useContext(CurrentUserContext);

  let tweetId = window.location.pathname.substr(7);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {homeFeed ? (
        <BigTweet
          tweetId={tweetId}
          tweetFeed={props.tweetFeed}
          tweetLike={props.tweetLike}
          setTweetLike={props.setTweetLike}
        ></BigTweet>
      ) : (
        "loading"
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default TweetDetails;
