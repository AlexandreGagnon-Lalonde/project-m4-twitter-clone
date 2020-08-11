import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";

const ProfilePic = () => {
  const { currentUser, profileUser } = React.useContext(CurrentUserContext);

  return <ProfileImgContainer src={profileUser.profile.avatarSrc}></ProfileImgContainer>
}

const ProfileImgContainer = styled.img`
  width: 20%;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 10px;
`

export default ProfilePic