import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../constants";

const FollowButton = () => {
  const { currentUser, profileUser } = React.useContext(CurrentUserContext);

  return <StyledButton>Follow</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 15px;
`
export default FollowButton