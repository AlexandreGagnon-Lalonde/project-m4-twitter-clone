import React from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../../CurrentUserContext";

const moment = require("moment");

const BigTweetTime = (props) => {
  const { tweetFeed, currentUser, profileUser, homeFeed } = React.useContext(CurrentUserContext);

  const time = moment(homeFeed.tweetsById[props.tweetId].timeStamp).format('LT');
  const date = moment(homeFeed.tweetsById[props.tweetId].timeStamp).format('ll').replace(/,/, '');

  return (
    <div>
      {`${time} · ${date} · Critter web app`}
    </div>
  );
};

export default BigTweetTime;
