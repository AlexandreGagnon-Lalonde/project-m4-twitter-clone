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
      <Link to={'/'}><CritterLogo src={Logo} alt='Critter Logo'></CritterLogo></Link>
      <Link to={'/'}><SidebarHomeFeed></SidebarHomeFeed></Link>
      <Link to={'/:profileId'}><SidebarProfile></SidebarProfile></Link>
      <Link to={'/notifications'}><SidebarNotifications></SidebarNotifications></Link>
      <Link to={'/bookmarks'}><SidebarBookmark></SidebarBookmark></Link>
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