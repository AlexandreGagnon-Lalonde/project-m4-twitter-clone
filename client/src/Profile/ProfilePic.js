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
  width: 20%;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 10px;
`;

export default ProfilePic;
