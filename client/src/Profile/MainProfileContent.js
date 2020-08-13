import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import Banner from "./Banner";
import ProfilePic from "./ProfilePic";
import FollowButton from "./FollowButton";
import ProfileInfo from "./ProfileInfo";
import Assets from "./Assets";
import ProfileFeed from "./ProfileFeed";

const MainProfileContent = (props) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Banner profileUser={props.profileUser}></Banner>
      <ProfilePic profileUser={props.profileUser}></ProfilePic>
      <FollowButton
        profileUser={props.profileUser}
        following={props.following}
        setFollowingLoaded={props.setFollowingLoaded}
      ></FollowButton>
      <ProfileInfo profileUser={props.profileUser}></ProfileInfo>
      <Assets profileUser={props.profileUser}></Assets>
      <ProfileFeed
        profileUser={props.profileUser}
        tweetFeed={props.tweetFeed}
        tweetLike={props.tweetLike}
        setTweetLike={props.setTweetLike}
      ></ProfileFeed>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  width: 1000px;
`;

export default MainProfileContent;
