import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../Sidebar/Sidebar";
import { CurrentUserContext } from "../CurrentUserContext";
import MainProfileContent from "./MainProfileContent";

const Profile = () => {
  const { currentUser, setCurrentUser, status, setStatus, tweetFeed, setTweetFeed } = React.useContext(CurrentUserContext);
  console.log(currentUser);
  let temp;
  let userProfile;

  if (currentUser) {
    temp = currentUser.profile.displayName;
  } else {
    temp = "Loading";
  }


  React.useEffect(() => {
    // grab user handle from the url
    let userHandle = window.location.pathname.substr(1);
    if (userHandle === ':profileId') {
      userHandle = 'treasurymog';
    }


    fetch(`/api/${userHandle}/profile`)
      .then((res) => res.json())
      .then((profileData) => {
        userProfile = profileData;
      })
      .catch((err) => console.log(err));
  });

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      {currentUser 
          ? <MainProfileContent></MainProfileContent> 
          : <div>{temp}</div>
      }
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Profile;
