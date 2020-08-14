import React from "react";

import { CurrentUserContext } from "../CurrentUserContext";

const HomeTweetContent = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);
console.log('hometweetcontent', homeFeed)
  const mediaArrayLength = homeFeed.tweetsById[props.tweetId].media.length;

  return (
    <div>{mediaArrayLength !== 0 ? <img src={homeFeed.tweetsById[props.tweetId].media[0].url} alt='military cat'></img> : null}</div>
  );
};

export default HomeTweetContent;
