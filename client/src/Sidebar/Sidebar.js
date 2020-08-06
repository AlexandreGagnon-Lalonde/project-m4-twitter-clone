import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components';
import SidebarBookmark from './SidebarBookmark';
import SidebarNotifications from './SidebarNotifications';
import SidebarProfile from './SidebarProfile';
import SidebarHomeFeed from './SidebarHomeFeed';
import Logo from '../assets/logo.svg';

const Sidebar = () => {
  return <div>
    <Wrapper>
      <CritterLogo src={Logo} alt='Critter Logo'></CritterLogo>
      <SidebarHomeFeed></SidebarHomeFeed>
      <SidebarProfile></SidebarProfile>
      <SidebarNotifications></SidebarNotifications>
      <SidebarBookmark></SidebarBookmark>
    </Wrapper>
  </div>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CritterLogo = styled.img`

`

export default Sidebar