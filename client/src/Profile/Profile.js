import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import Sidebar from '../Sidebar/Sidebar';
import { CurrentUserContext } from "../CurrentUserContext";

const Profile = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log(currentUser)
  let temp;
  if (currentUser) {
    temp = currentUser.profile.displayName;
  } else {
    temp = 'Loading';
  }
  return <Wrapper>
    <Sidebar></Sidebar>
    <div>{temp}</div>
  </Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
`

export default Profile