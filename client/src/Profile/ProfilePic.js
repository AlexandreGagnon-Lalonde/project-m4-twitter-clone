import React from "react";

import styled from "styled-components";

const ProfilePic = (props) => {
  return (
    <ProfileImgContainer
      src={props.profileUser.profile.avatarSrc}
    ></ProfileImgContainer>
  );
};

const ProfileImgContainer = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 3px solid white;
  margin-left: 15px;
  position: absolute;
  bottom: -75px;
  z-index: 99;
`;

export default ProfilePic;
