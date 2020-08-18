import React from "react";
import styled from "styled-components";

const TweetContent = (props) => {
  return (
    <StyledDiv>
      {props.tweetFeed.tweetsById[props.tweetId].media.length !== 0 ? (
        <StyledImage
          src={props.tweetFeed.tweetsById[props.tweetId].media[0].url}
          alt="photoshoped military cat"
        ></StyledImage>
      ) : null}
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  box-sizing: border-box;
`;
const StyledImage = styled.img`
  border-radius: 25px;
  max-width: 100%;
  max-height: 100%;
  padding: 10px 10px 10px 0;
`;

export default TweetContent;
