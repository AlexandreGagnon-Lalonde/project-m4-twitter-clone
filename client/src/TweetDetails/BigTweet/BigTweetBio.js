import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetBio = (props) => {
  const { tweetFeed, currentUser, profileUser, homeFeed } = React.useContext(CurrentUserContext);
  return <div>
    {homeFeed ?
      homeFeed.tweetsById[props.tweetId].status : 
      'Loading'
    }
  </div>
}

export default BigTweetBio