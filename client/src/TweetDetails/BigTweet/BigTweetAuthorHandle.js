import React from "react";

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorHandle = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  return <div>
    @{homeFeed.tweetsById[props.tweetId].author.handle}
  </div>;
};

export default BigTweetAuthorHandle;
