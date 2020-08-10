import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import profileFeed from "../Profile/ProfileFeed";
import HomeRetweet from "./HomeRetweet";
import HomeTweetBio from "./HomeTweetBio";
import HomeTweetUserImage from "./HomeTweetUserImage";
import HomeTweetAuthor from "./HomeTweetAuthor";
import HomeTweetContent from "./HomeTweetContent";
import HomeTweetButton from "./HomeTweetButton";
import { CurrentUserContext } from "../CurrentUserContext";

const HomeFeed = () => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <div>
        <h1>Home</h1>
        <div>
          <StyledUserImage src={currentUser ? currentUser.avatarSrc : null}></StyledUserImage>
          <input type="text"></input>
          <span></span>
          <button>Meow</button>
        </div>
        <div>
          {homeFeed
            ? homeFeed.tweetIds.map((tweet) => {
                return (
                  <ProfileFeedContainer key={tweet}>
                    <HomeRetweet tweetId={tweet}></HomeRetweet>
                    <HomeTweetUserImage tweetId={tweet}></HomeTweetUserImage>
                    <HomeTweetAuthor tweetId={tweet}></HomeTweetAuthor>
                    <HomeTweetBio tweetId={tweet}></HomeTweetBio>
                    <HomeTweetContent tweetId={tweet}></HomeTweetContent>
                    <HomeTweetButton tweetId={tweet}></HomeTweetButton>
                  </ProfileFeedContainer>
                );
              })
            : "Loading"}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;
const ProfileFeedContainer = styled.div`
  border: 1px solid black;
`;
const StyledUserImage = styled.img`
  width: 50px;
  border-radius: 50%;
`

export default HomeFeed;
