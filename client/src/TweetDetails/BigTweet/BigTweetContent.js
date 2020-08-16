import React from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetContent = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);
  return (
    <StyledDiv>
      {homeFeed.tweetsById[props.tweetId].media.length !== 0 ? (
        <StyledImage
          src={homeFeed.tweetsById[props.tweetId].media[0].url}
          alt="funny military cat"
        ></StyledImage>
      ) : null}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin: 10px;
`;
const StyledImage = styled.img`
  border-radius: 25px;
`;
export default BigTweetContent;
