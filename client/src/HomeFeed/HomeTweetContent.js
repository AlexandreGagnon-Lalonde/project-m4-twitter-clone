import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const HomeTweetContent = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);

  return (
    <div>
      {homeFeed.tweetsById[props.tweetId].media.length !== 0
        ? <img src={homeFeed.tweetsById[props.tweetId].media[0].url}></img>
        : null}
    </div>
  );
};

export default HomeTweetContent;
