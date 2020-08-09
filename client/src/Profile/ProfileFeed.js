import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";

const ProfileFeed = () => {
  const { tweetFeed } = React.useContext(CurrentUserContext);
  console.log('tweetfeed',tweetFeed)
  return <div>
    <Retweet></Retweet>
    <TweetBio></TweetBio>
    <TweetAuthor></TweetAuthor>
    <TweetContent></TweetContent>
    <TweetButtons></TweetButtons>
  </div>
}

export default ProfileFeed