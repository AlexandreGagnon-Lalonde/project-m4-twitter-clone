import React from "react";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUserContext";
import MainProfileContent from "./MainProfileContent";
import LoadingIcon from "../LoadingFiller/LoadingFiller";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const Profile = (props) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const [profileUser, setProfileUser] = React.useState(null);
  const [tweetFeed, setTweetFeed] = React.useState(null);
  const [following, setFollowing] = React.useState(null);
  const [followingLoaded, setFollowingLoaded] = React.useState(false);
  const [profileFeedError, setProfileFeedError] = React.useState(false);

  React.useEffect(() => {
    if (!followingLoaded) {
      fetch(`/api/${currentUser.handle}/following`)
        .then((res) => res.json())
        .then((data) => {
          setFollowing(data);
          setFollowingLoaded(true);
        })
        .catch((err) => {
          console.log(err);
          setProfileFeedError(true);
        });
    }
  }, [profileUser, currentUser, following, followingLoaded]);
  React.useEffect(() => {
    if (props.profileId) {
      fetch(`/api/${props.profileId}/profile`)
        .then((res) => res.json())
        .then((profileData) => {
          // set profile data
          setProfileUser(profileData);
          // fetch profile feed
          fetch(`/api/${props.profileId}/feed/`)
            .then((res) => res.json())
            .then((profileFeed) => {
              setTweetFeed(profileFeed);
            })
            .catch((err) => {
              console.log(err);
              setProfileFeedError(true);
            });
        })
        .catch((err) => {
          console.log(err);
          setProfileFeedError(true);
        });
    }
  }, [props]);
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {profileFeedError ? (
        <ErrorScreen></ErrorScreen>
      ) : profileUser && currentUser && following ? (
        <MainProfileContent
          profileUser={profileUser}
          tweetFeed={tweetFeed}
          following={following}
          setFollowingLoaded={setFollowingLoaded}
          tweetLike={props.tweetLike}
          setTweetLike={props.setTweetLike}
          retweeted={props.retweeted}
          setRetweeted={props.setRetweeted}
          profileId={props.profileId}
        ></MainProfileContent>
      ) : (
        <LoadingIcon></LoadingIcon>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
