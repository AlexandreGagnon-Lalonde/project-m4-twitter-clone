import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CurrentUserContext } from "../../CurrentUserContext";

import styled from "styled-components";
import BigTweetUserImage from "./BigTweetUserImage";
import BigTweetAuthorDisplayName from "./BigTweetAuthorDisplayName";
import BigTweetAuthorHandle from "./BigTweetAuthorHandle";
import BigTweetBio from "./BigTweetBio";
import BigTweetContent from "./BigTweetContent";
import BigTweetTime from "./BigTweetTime";
import BigTweetButtons from "./BigTweetButtons";

const BigTweet = (props) => {
  const { tweetFeed, currentUser, homeFeed, profileUser } = React.useContext(
    CurrentUserContext
  );

  console.log("bigtweet", props);
  if (homeFeed) {
    return (
      <Wrapper>
        <BigTweetUserImage
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetUserImage>
        <BigTweetAuthorDisplayName
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetAuthorDisplayName>
        <BigTweetAuthorHandle
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetAuthorHandle>
        <BigTweetBio
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetBio>
        <BigTweetContent
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetContent>
        <BigTweetTime
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
        ></BigTweetTime>
        <BigTweetButtons
          tweetId={props.tweetId}
          tweetFeed={props.tweetFeed}
          tweetLike={props.tweetLike}
          setTweetLike={props.setTweetLike}
        ></BigTweetButtons>
      </Wrapper>
    );
  } else {
    return <div>Loading</div>;
  }
};

const Wrapper = styled.div`
  display: block;
`;

export default BigTweet;
