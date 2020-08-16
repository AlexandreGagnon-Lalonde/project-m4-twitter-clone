import React from "react";
import {
  NavLink,
  Link
} from "react-router-dom";


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
        <Link to={`/${props.tweetFeed.tweetsById[props.tweetId].author.handle}`}>
          {props.tweetFeed.tweetsById[props.tweetId].author.displayName}
        </Link>{" "}
        @{props.tweetFeed.tweetsById[props.tweetId].author.handle} · Joined{" "}
        {retweetUserDate}
      </div>
    );
  } else {
    return (
      <div>
        <Link to={`/${props.profileUser.profile.handle}`}>
          {props.profileUser.profile.displayName}
        </Link>{" "}
        @{props.profileUser.profile.handle} · Joined {profileUserDate}
      </div>
    );
  }
};

export default TweetAuthor;
