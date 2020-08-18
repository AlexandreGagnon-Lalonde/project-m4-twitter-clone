import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Retweet from "../TweetDetails/Retweet";
import TweetBio from "../TweetDetails/TweetBio";
import TweetUserImage from "../TweetDetails/TweetUserImage";
import TweetAuthor from "../TweetDetails/TweetAuthor";
import TweetContent from "../TweetDetails/TweetContent";
import TweetButtons from "../TweetDetails/TweetButtons";
import LoadingIcon from "../LoadingFiller/LoadingFiller";

const ProfileFeed = (props) => {
  return (
    <div>
      {props.tweetFeed ? (
        props.tweetFeed.tweetIds.map((tweet) => {
          return (
            <StyledLink to={`/tweet/${tweet}`} key={tweet}>
              <ProfileFeedContainer key={tweet}>
                <Retweet
                  tweetId={tweet}
                  profileUser={props.profileUser}
                  tweetFeed={props.tweetFeed}
                ></Retweet>
                <ProfileTweetFeedContainer>
                  <TweetUserImage
                    tweetId={tweet}
                    profileUser={props.profileUser}
                    tweetFeed={props.tweetFeed}
                  ></TweetUserImage>
                  <ProfileFeedContainerContainer>
                    <TweetAuthor
                      tweetId={tweet}
                      profileUser={props.profileUser}
                      tweetFeed={props.tweetFeed}
                    ></TweetAuthor>
                    <TweetBio
                      tweetId={tweet}
                      profileUser={props.profileUser}
                      tweetFeed={props.tweetFeed}
                    ></TweetBio>
                    <TweetContent
                      tweetId={tweet}
                      profileUser={props.profileUser}
                      tweetFeed={props.tweetFeed}
                    ></TweetContent>
                    <TweetButtons
                      tweetId={tweet}
                      profileUser={props.profileUser}
                      tweetFeed={props.tweetFeed}
                      tweetLike={props.tweetLike}
                      setTweetLike={props.setTweetLike}
                      retweeted={props.retweeted}
                      setRetweeted={props.setRetweeted}
                    ></TweetButtons>
                  </ProfileFeedContainerContainer>
                </ProfileTweetFeedContainer>
              </ProfileFeedContainer>
            </StyledLink>
          );
        })
      ) : (
        <LoadingIcon></LoadingIcon>
      )}
    </div>
  );
};

const ProfileFeedContainer = styled.div`
  width: 1000px;
  border-bottom: 1px solid lightgray;
`;
const ProfileTweetFeedContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ProfileFeedContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default ProfileFeed;
