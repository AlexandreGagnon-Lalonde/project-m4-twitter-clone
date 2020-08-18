import React from "react";

import { CurrentUserContext } from "../../CurrentUserContext";

import styled from "styled-components";
import BigTweetUserImage from "./BigTweetUserImage";
import BigTweetAuthorDisplayName from "./BigTweetAuthorDisplayName";
import BigTweetAuthorHandle from "./BigTweetAuthorHandle";
import BigTweetBio from "./BigTweetBio";
import BigTweetContent from "./BigTweetContent";
import BigTweetTime from "./BigTweetTime";
import BigTweetButtons from "./BigTweetButtons";
import LoadingIcon from "../../LoadingFiller/LoadingFiller";

const BigTweet = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  if (homeFeed) {
    return (
      <Wrapper>
        <ImageContainer>
          <BigTweetUserImage
            tweetId={props.tweetId}
            tweetFeed={props.tweetFeed}
          ></BigTweetUserImage>
          <AuthorContainer>
            <BigTweetAuthorDisplayName
              tweetId={props.tweetId}
              tweetFeed={props.tweetFeed}
            ></BigTweetAuthorDisplayName>
            <BigTweetAuthorHandle
              tweetId={props.tweetId}
              tweetFeed={props.tweetFeed}
            ></BigTweetAuthorHandle>
          </AuthorContainer>
        </ImageContainer>
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
          retweeted={props.retweeted}
          setRetweeted={props.setRetweeted}
        ></BigTweetButtons>
      </Wrapper>
    );
  } else {
    return <LoadingIcon></LoadingIcon>;
  }
};

const Wrapper = styled.div`
  display: block;
  border: 1px solid lightgray;
`;
const ImageContainer = styled.div`
  display: flex;
`;
const AuthorContainer = styled.div`
  margin-top: 18px;
`;

export default BigTweet;
