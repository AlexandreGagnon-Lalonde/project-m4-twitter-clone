import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import ProfilePic from "./ProfilePic";
import FollowButton from "./FollowButton";
import ProfileInfo from "./ProfileInfo";
import Assets from "./Assets";
import ProfileFeed from "./ProfileFeed";

const MainProfileContent = (props) => {
  return (
    <Wrapper>
      <BannerDiv>
        <Banner profileUser={props.profileUser}></Banner>
        <ProfilePic profileUser={props.profileUser}></ProfilePic>
        <FollowButton
          profileUser={props.profileUser}
          following={props.following}
          setFollowingLoaded={props.setFollowingLoaded}
        ></FollowButton>
      </BannerDiv>
      <ProfileInfo profileUser={props.profileUser}></ProfileInfo>
      <Assets profileUser={props.profileUser}></Assets>
      <ProfileFeed
        profileUser={props.profileUser}
        tweetFeed={props.tweetFeed}
        tweetLike={props.tweetLike}
        setTweetLike={props.setTweetLike}
        retweeted={props.retweeted}
        setRetweeted={props.setRetweeted}
      ></ProfileFeed>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  width: 1000px;
`;
const BannerDiv = styled.div`
  position: relative;
  margin-bottom: 75px;
`;

export default MainProfileContent;
