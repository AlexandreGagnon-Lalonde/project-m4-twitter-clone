import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUserContext";
import MainProfileContent from "./MainProfileContent";

const Profile = (props) => {
  const { currentUser, setCurrentUser, status, setStatus } = React.useContext(
    CurrentUserContext
  );

  const [profileUser, setProfileUser] = React.useState(null);
  const [profileLoaded, setProfileLoaded] = React.useState(false);
  const [tweetFeed, setTweetFeed] = React.useState(null);
  const [following, setFollowing] = React.useState(null);
  const [followingLoaded, setFollowingLoaded] = React.useState(false);

  let temp;
  let userHandle;

  if (profileUser) {
    temp = profileUser.profile.displayName;
  } else {
    temp = "Loading";
  }

  React.useEffect(() => {
    // grab user handle from the url
    userHandle = window.location.pathname.substr(1);
    if (!profileLoaded) {
      fetch(`/api/${userHandle}/profile`)
        .then((res) => res.json())
        .then((profileData) => {
          // set profile data
          setProfileUser(profileData);
          // confirm that profile is fetched
          setProfileLoaded(true);
          // fetch profile feed 
          fetch(`/api/${userHandle}/feed/`)
            .then((res) => res.json())
            .then((profileFeed) => {
              setTweetFeed(profileFeed);
            });
        })
        .catch((err) => console.log(err));
    }
    if (!followingLoaded) {
          // fetch following array of currentUser
    fetch(`/api/${currentUser.handle}/following`)
      .then((res) => res.json())
      .then((data) => {
        setFollowing(data);
        setFollowingLoaded(true)
      })
      .catch((err) => console.log(err));

    }
  }, [profileUser, currentUser, userHandle, following, followingLoaded, setFollowingLoaded]);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {profileUser && currentUser && following ? (
        <MainProfileContent
          profileUser={profileUser}
          tweetFeed={tweetFeed}
          following={following}
          setFollowingLoaded={setFollowingLoaded}
          tweetLike={props.tweetLike}
          setTweetLike={props.setTweetLike}
        ></MainProfileContent>
      ) : (
        <div>{temp}</div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
