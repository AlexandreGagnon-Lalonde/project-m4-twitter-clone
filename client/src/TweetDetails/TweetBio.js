import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const TweetBio = (props) => {
  const { tweetFeed, currentUser, profileUser } = React.useContext(CurrentUserContext);
  return <div>
    {tweetFeed ?
      tweetFeed.tweetsById[props.tweetId].status : 
      'Loading'
    }
  </div>
}

export default TweetBio