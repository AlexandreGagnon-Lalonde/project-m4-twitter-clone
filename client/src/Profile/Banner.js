import React from "react";

import styled from "styled-components";

const Banner = (props) => {
  return (
    <ImgContainer src={props.profileUser.profile.bannerSrc}></ImgContainer>
  );
};

const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default Banner;
