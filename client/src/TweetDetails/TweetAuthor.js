import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";
const moment = require("moment");

const TweetAuthor = (props) => {
  const { tweetFeed, currentUser } = React.useContext(CurrentUserContext);
  let currentUserDate = moment(new Date(currentUser.profile.joined)).format(
    "MMM Do"
  );
  let retweetUserDate = moment(
    new Date(tweetFeed.tweetsById[props.tweetId].author.joined)
  ).format("MMM Do");
  if (tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        {tweetFeed.tweetsById[props.tweetId].author.displayName} @
        {tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        {currentUser.profile.displayName} @{currentUser.profile.handle} · Joined{" "}
        {currentUserDate}
      </div>
    );
  }
};

export default TweetAuthor;
