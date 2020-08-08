import React from "react";

import { RiUser3Line } from "react-icons/ri";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { COLORS } from "../constants";
import { CurrentUserContext } from "../CurrentUserContext";

const SidebarProfile = () => {
  return (
    <NavigationLink to={"/:profileId"}>
      <RiUser3Line />
      <Spacer>Profile</Spacer>
    </NavigationLink>
  );
};

const Wrapper = styled.div`
  font-weight: bold;
  color: #000;
`;
const Spacer = styled.span`
  padding: 0 10px;
`;
const NavigationLink = styled(NavLink)`
  font-weight: bold;
  color: #000;
  text-decoration: none;
  display: flex;
  height: 40px;
  margin: 5px 0;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  width: fit-content;

  &.active {
    color: ${COLORS.primary};
  }
  &:hover {
    background: ${COLORS.primaryTransparent};
  }
`;

export default SidebarProfile;