import React from 'react';

import styled from 'styled-components';

import { CurrentUserContext } from "../CurrentUserContext";
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const ErrorScreen = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);
  
  return <div>Error {bomb}</div>
}

export default ErrorScreen