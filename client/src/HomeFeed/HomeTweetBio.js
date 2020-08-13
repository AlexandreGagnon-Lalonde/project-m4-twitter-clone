import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";

const HomeTweetBio = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  return (
    <div>
      {homeFeed ? homeFeed.tweetsById[props.tweetId].status : "Loading"}
    </div>
  );
};

export default HomeTweetBio;
