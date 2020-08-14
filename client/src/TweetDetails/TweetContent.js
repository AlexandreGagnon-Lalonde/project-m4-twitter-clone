import React from "react";

const TweetContent = (props) => {
  return (
    <div>
      {props.tweetFeed.tweetsById[props.tweetId].media.length !== 0 ? (
        <img src={props.tweetFeed.tweetsById[props.tweetId].media[0].url} alt='photoshoped military cat'></img>
      ) : null}
    </div>
  );
};

export default TweetContent;
