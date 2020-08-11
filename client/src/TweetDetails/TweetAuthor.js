import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";
const moment = require("moment");

const TweetAuthor = (props) => {
  const { tweetFeed, currentUser, homeFeed, profileUser } = React.useContext(CurrentUserContext);
  let profileUserDate = moment(new Date(profileUser.profile.joined)).format(
    "MMM Do"
  );
  let retweetUserDate = moment(
    new Date(tweetFeed.tweetsById[props.tweetId].author.joined)
  ).format("MMM Do");
  if (tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <a href={`/${profileUser.profile.handle}`}>{tweetFeed.tweetsById[props.tweetId].author.displayName}</a> @
        {tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        <a href={`/${profileUser.profile.handle}`}>{profileUser.profile.displayName}</a> @{profileUser.profile.handle} · Joined{" "}
        {profileUserDate}
      </div>
    );
  }
};

export default TweetAuthor;
