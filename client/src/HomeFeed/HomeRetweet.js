import React from "react";
import styled from 'styled-components'

import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineRetweet } from "react-icons/ai";
import { COLORS } from '../constants'

const HomeRetweet = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  if (homeFeed.tweetsById[props.tweetId].retweetFrom) {
    return (
      <StyledDiv>
        <AiOutlineRetweet /> {currentUser.displayName} Remeowed
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

export default HomeRetweet;
