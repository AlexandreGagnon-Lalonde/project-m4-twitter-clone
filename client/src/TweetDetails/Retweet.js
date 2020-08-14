import React from "react";

import { AiOutlineRetweet } from "react-icons/ai";

const Retweet = (props) => {
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <div>
        <AiOutlineRetweet /> {props.profileUser.profile.displayName} Remeowed
      </div>
    );
  } else {
    return null;
  }
};

export default Retweet;
