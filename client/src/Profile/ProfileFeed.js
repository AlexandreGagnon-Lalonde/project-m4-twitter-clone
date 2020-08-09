import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import Retweet from "../TweetDetails/Retweet";
import TweetBio from "../TweetDetails/TweetBio";
import TweetUserImage from "../TweetDetails/TweetUserImage";
import TweetAuthor from "../TweetDetails/TweetAuthor";
import TweetContent from "../TweetDetails/TweetContent";
import TweetButtons from "../TweetDetails/TweetButtons";

const ProfileFeed = () => {
  const { tweetFeed } = React.useContext(CurrentUserContext);
  console.log("tweetfeed", tweetFeed);
  return (
    <div>
      {tweetFeed
        ? tweetFeed.tweetIds.map((tweet) => {
            return (
              <ProfileFeedContainer>
                <Retweet tweetId={tweet}></Retweet>
                <TweetUserImage tweetId={tweet}></TweetUserImage>
                <TweetAuthor tweetId={tweet}></TweetAuthor>
                <TweetBio tweetId={tweet}></TweetBio>
                <TweetContent tweetId={tweet}></TweetContent>
                <TweetButtons tweetId={tweet}></TweetButtons>
              </ProfileFeedContainer>
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
