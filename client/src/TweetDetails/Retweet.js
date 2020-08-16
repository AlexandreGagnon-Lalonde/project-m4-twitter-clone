import React from "react";
import styled from 'styled-components'

import { AiOutlineRetweet } from "react-icons/ai";
import { COLORS } from '../constants'

const Retweet = (props) => {
  if (props.tweetFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <StyledDiv>
        <AiOutlineRetweet /> {props.profileUser.profile.displayName} Remeowed
      </StyledDiv>
    );
  } else {
    return null;
  }
};

const StyledDiv = styled.div`
  font-size: 16px;
  margin: 0 0 0 50px;
  padding-top: 10px;
  color: ${COLORS.black};
`


export default Retweet;
