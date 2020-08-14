import React from "react";

import { CurrentUserContext } from "../CurrentUserContext";

const HomeTweetBio = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);
  return (
    <div>
      {homeFeed ? homeFeed.tweetsById[props.tweetId].status : "Loading"}
    </div>
  );
};

export default HomeTweetBio;
