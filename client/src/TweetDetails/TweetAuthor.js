import React from "react";

const { format } = require("date-fns");

const TweetAuthor = (props) => {
  let profileUserDate = format(
    new Date(props.profileUser.profile.joined),
    "MMM do"
  );
  let retweetUserDate = format(
    new Date(props.tweetFeed.tweetsById[props.tweetId].author.joined),
    "MMM do"
  );
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <a href={`/${props.tweetFeed.tweetsById[props.tweetId].author.handle}`}>
          {props.tweetFeed.tweetsById[props.tweetId].author.displayName}
        </a>{" "}
        @{props.tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        <a href={`/${props.profileUser.profile.handle}`}>
          {props.profileUser.profile.displayName}
        </a>{" "}
        @{props.profileUser.profile.handle} · Joined {profileUserDate}
      </div>
    );
  }
};

export default TweetAuthor;
