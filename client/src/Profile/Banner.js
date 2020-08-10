import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";

const Banner = () => {
  const { currentUser, profileUser } = React.useContext(CurrentUserContext);

  return <ImgContainer src={profileUser.profile.bannerSrc}></ImgContainer>
}

const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export default Banner