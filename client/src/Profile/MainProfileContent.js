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
      <Banner></Banner>
      <ProfilePic></ProfilePic>
      <FollowButton></FollowButton>
      <ProfileInfo></ProfileInfo>
      <Assets></Assets>
      <ProfileFeed></ProfileFeed>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
`;

export default MainProfileContent;
