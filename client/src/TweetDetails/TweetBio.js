import React from "react";

const TweetBio = (props) => {
  return (
    <div>
      {props.tweetFeed
        ? props.tweetFeed.tweetsById[props.tweetId].status
        : "Loading"}
    </div>
  );
};

export default TweetBio;
