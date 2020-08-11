import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import BigTweet from "./BigTweet/BigTweet";

const TweetDetails = (props) => {
  let tweetId = window.location.pathname.substr(7);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <BigTweet tweetId={tweetId}></BigTweet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default TweetDetails;
