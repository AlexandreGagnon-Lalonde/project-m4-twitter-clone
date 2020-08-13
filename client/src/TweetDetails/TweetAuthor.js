import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";
const moment = require("moment");

const TweetAuthor = (props) => {
  const { currentUser, homeFeed } = React.useContext(CurrentUserContext);
  let profileUserDate = moment(new Date(props.profileUser.profile.joined)).format(
    "MMM Do"
  );
  let retweetUserDate = moment(
    new Date(props.tweetFeed.tweetsById[props.tweetId].author.joined)
  ).format("MMM Do");
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <a href={`/${props.tweetFeed.tweetsById[props.tweetId].author.handle}`}>{props.tweetFeed.tweetsById[props.tweetId].author.displayName}</a> @
        {props.tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        <a href={`/${props.profileUser.profile.handle}`}>{props.profileUser.profile.displayName}</a> @{props.profileUser.profile.handle} · Joined{" "}
        {profileUserDate}
      </div>
    );
  }
};

export default TweetAuthor;
