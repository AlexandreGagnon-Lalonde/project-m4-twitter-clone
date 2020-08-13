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
// import data from "../../../server/data";

const HomeFeed = () => {
  const { homeFeed, currentUser, setNewTweet, newTweet, inputLength, setInputLength, setHomeFeed } = React.useContext(CurrentUserContext);

  function handleSubmit(event) {
    event.preventDefault();

    console.log('homefeeddata', newTweet)

    fetch('/api/tweet', {
      method: 'POST',
      body: JSON.stringify({
        status: newTweet,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(state => {
      fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((feed) => {
        setHomeFeed(feed);
      })
      .catch((err) => console.log(err));
    })
    // reset input field after new tweet
    document.getElementById('newTweetId').reset()
  }

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit} id='newTweetId'>
          <StyledUserImage src={currentUser ? currentUser.avatarSrc : null}></StyledUserImage>
          <input id="tweet" name="tweet" type="text" onChange={(ev) => {
            setNewTweet(ev.target.value);
            setInputLength(ev.target.value.length);
          }}></input>
          <span>{inputLength > 0 ? 280 - inputLength : 280}</span>
          <button disabled={inputLength <= 0 || inputLength > 280}>Meow</button>
        </form>
        <div>
          {homeFeed
            ? homeFeed.tweetIds.map((tweet) => {
                return (
                  <a href={`/tweet/${tweet}`}>
                    <ProfileFeedContainer key={tweet}>
                      <HomeRetweet tweetId={tweet}></HomeRetweet>
                      <HomeTweetUserImage tweetId={tweet}></HomeTweetUserImage>
                      <HomeTweetAuthor tweetId={tweet}></HomeTweetAuthor>
                      <HomeTweetBio tweetId={tweet}></HomeTweetBio>
                      <HomeTweetContent tweetId={tweet}></HomeTweetContent>
                      <HomeTweetButton tweetId={tweet}></HomeTweetButton>
                    </ProfileFeedContainer>
                  </a>
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
  width: 1000px;
`;
const StyledUserImage = styled.img`
  width: 50px;
  border-radius: 50%;
`

export default HomeFeed;
