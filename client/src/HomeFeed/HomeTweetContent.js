import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

const HomeTweetContent = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);
  const mediaArrayLength = homeFeed.tweetsById[props.tweetId].media.length;

  return (
    <StyledDiv>
      {mediaArrayLength !== 0 ? (
        <StyledImage
          src={homeFeed.tweetsById[props.tweetId].media[0].url}
          alt="military cat"
        ></StyledImage>
      ) : null}
    </StyledDiv>
  );
};

const StyledImage = styled.img`
  border-radius: 25px;
  max-width: 100%;
  max-height: 100%;
  padding: 10px 10px 10px 0;
`;
const StyledDiv = styled.div`
  box-sizing: border-box;
`;

export default HomeTweetContent;
