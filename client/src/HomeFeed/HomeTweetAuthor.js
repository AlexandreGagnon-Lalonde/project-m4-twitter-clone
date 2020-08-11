import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";
const moment = require("moment");

const HomeTweetAuthor = (props) => {
  const { homeFeed, currentUser} = React.useContext(CurrentUserContext);
  let currentUserDate = moment(new Date(currentUser.joined)).format(
    "MMM Do"
  );
  let retweetUserDate = moment(
    new Date(homeFeed.tweetsById[props.tweetId].author.joined)
  ).format("MMM Do");
  if (homeFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <a href={`/${homeFeed.tweetsById[props.tweetId].author.handle}`}>{homeFeed.tweetsById[props.tweetId].author.displayName}</a> @
        {homeFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        <a href={`/${currentUser.handle}`}>{currentUser.displayName}</a> @{currentUser.handle} · Joined{" "}
        {currentUserDate}
      </div>
    );
  }
};

export default HomeTweetAuthor;
