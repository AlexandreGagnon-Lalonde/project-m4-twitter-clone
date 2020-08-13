import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import styled from "styled-components";
import SidebarBookmark from "./SidebarBookmark";
import SidebarNotifications from "./SidebarNotifications";
import SidebarProfile from "./SidebarProfile";
import SidebarHomeFeed from "./SidebarHomeFeed";
import Logo from "../assets/logo.svg";
import { COLORS } from "../constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={Logo} alt="Critter Logo"></img>
      </Link>
      <SidebarHomeFeed></SidebarHomeFeed>
      <SidebarProfile></SidebarProfile>
      <SidebarNotifications></SidebarNotifications>
      <SidebarBookmark></SidebarBookmark>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 50px 0 50px;
`;

export default Sidebar;
