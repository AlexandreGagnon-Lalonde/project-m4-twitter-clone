import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const moment = require("moment");

const BigTweetTime = (props) => {
  const { tweetFeed, currentUser, profileUser, homeFeed } = React.useContext(CurrentUserContext);

let time = new Date(`${homeFeed.tweetsById[props.tweetId].timeStamp}`)
console.log(time)
console.log(moment(homeFeed.tweetsById[props.tweetId].timeStamp).format('MMM Do YYYY'))
console.log(moment(homeFeed.tweetsById[props.tweetId].timeStamp).format('LT'))
  //  
  return (
    <div>
      {'asdf'}
    </div>
  );
};

export default BigTweetTime;
