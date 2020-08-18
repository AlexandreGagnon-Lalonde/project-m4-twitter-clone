import React from "react";

import { FiHome } from "react-icons/fi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const SidebarHomeFeed = () => {
  return (
    <NavigationLink exact to={"/"}>
      <FiHome />
      <Spacer>HomeFeed</Spacer>
    </NavigationLink>
  );
};

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

export default SidebarHomeFeed;
