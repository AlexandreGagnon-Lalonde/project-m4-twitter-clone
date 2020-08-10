import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const HomeRetweer = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  if (homeFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <AiOutlineRetweet /> {currentUser.displayName} Remeowed
      </div>
    );
  } else {
    return null;
  }
}

export default HomeRetweer