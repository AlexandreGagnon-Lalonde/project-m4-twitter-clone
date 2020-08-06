import React from 'react';

import { FiBookmark } from "react-icons/fi";
import styled from 'styled-components';
import { COLORS } from '../constants';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";


const SidebarBookmark = () => {
  return <NavigationLink to={"/bookmarks"}><FiBookmark /><Spacer>Bookmark</Spacer></NavigationLink>
}

const Spacer = styled.span`
  padding: 0 10px;
`
const NavigationLink = styled(NavLink)`
  font-weight: bold;
  color: #000;  
  width: auto;

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

export default SidebarBookmark