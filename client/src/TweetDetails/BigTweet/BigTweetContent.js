import React from "react";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetContent = (props) => {
  const { homeFeed } = React.useContext(
    CurrentUserContext
  );
  return (
    <div>
      {homeFeed.tweetsById[props.tweetId].media.length !== 0 ? (
        <img src={homeFeed.tweetsById[props.tweetId].media[0].url} alt='funny military cat'></img>
      ) : null}
    </div>
  );
};

export default BigTweetContent;
