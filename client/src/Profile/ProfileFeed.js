import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import Retweet from "../TweetDetails/Retweet";
import TweetBio from "../TweetDetails/TweetBio";
import TweetUserImage from "../TweetDetails/TweetUserImage";
import TweetAuthor from "../TweetDetails/TweetAuthor";
import TweetContent from "../TweetDetails/TweetContent";
import TweetButtons from "../TweetDetails/TweetButtons";

const ProfileFeed = (props) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <div>
      {props.tweetFeed
        ? props.tweetFeed.tweetIds.map((tweet) => {
            return (
              <a href={`/tweet/${tweet}`}>
                <ProfileFeedContainer key={tweet}>
                  <Retweet tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></Retweet>
                  <TweetUserImage tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></TweetUserImage>
                  <TweetAuthor tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></TweetAuthor>
                  <TweetBio tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></TweetBio>
                  <TweetContent tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></TweetContent>
                  <TweetButtons tweetId={tweet} profileUser={props.profileUser} tweetFeed={props.tweetFeed}></TweetButtons>
                </ProfileFeedContainer>
              </a>
            );
          })
        : "Loading"}
    </div>
  );
};

const ProfileFeedContainer = styled.div`
  border: 1px solid black;
`;

export default ProfileFeed;
