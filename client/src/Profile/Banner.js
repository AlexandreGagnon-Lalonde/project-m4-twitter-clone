import React from "react";

import styled from "styled-components";

const Banner = (props) => {
  return (
    <ImgContainer src={props.profileUser.profile.bannerSrc}></ImgContainer>
  );
};

const ImgContainer = styled.img`
  display: block;
  width: 1000px;
  height: auto;
  box-sizing: border-box;
`;

export default Banner;
