import React from "react";
import styled from 'styled-components';

import { CurrentUserContext } from "../../CurrentUserContext";

const BigTweetAuthorHandle = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  return <StyledDiv>
    @{homeFeed.tweetsById[props.tweetId].author.handle}
  </StyledDiv>;
};

const StyledDiv = styled.div`
  color: gray;
  margin-top: 2px;
`
export default BigTweetAuthorHandle;
