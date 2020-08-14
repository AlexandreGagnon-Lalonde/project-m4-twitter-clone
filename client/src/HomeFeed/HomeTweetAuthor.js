import React from "react";

import { CurrentUserContext } from "../CurrentUserContext";

const { format } = require("date-fns");

const HomeTweetAuthor = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  console.log(currentUser.joined);
  let retweetUserDate = format(
    new Date(homeFeed.tweetsById[props.tweetId].author.joined),
    "MMM do"
  );
  return (
    <div>
      <a href={`/${homeFeed.tweetsById[props.tweetId].author.handle}`}>
        {homeFeed.tweetsById[props.tweetId].author.displayName}
      </a>{" "}
      @{homeFeed.tweetsById[props.tweetId].author.handle} · {retweetUserDate}
    </div>
  );
};

export default HomeTweetAuthor;
