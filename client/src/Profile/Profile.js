import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUserContext";
import MainProfileContent from "./MainProfileContent";

const Profile = () => {
  const {
    currentUser,
    setCurrentUser,
    status,
    setStatus,
    tweetFeed,
    setTweetFeed,
    profileUser,
    setProfileUser,
  } = React.useContext(CurrentUserContext);
  let temp;
  let userProfile;

  if (profileUser) {
    temp = profileUser.profile.displayName;
  } else {
    temp = "Loading";
  }

  React.useEffect(() => {
    // grab user handle from the url
    let userHandle = window.location.pathname.substr(1);
    if (userHandle === ":profileId") {
      userHandle = "treasurymog";
    }

    fetch(`/api/${userHandle}/profile`)
      .then((res) => res.json())
      .then((profileData) => {
        setProfileUser(profileData);
        fetch(`/api/${userHandle}/feed/`)
          .then((res) => res.json())
          .then((profileFeed) => {
            setTweetFeed(profileFeed);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {profileUser ? (
        <MainProfileContent></MainProfileContent>
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
