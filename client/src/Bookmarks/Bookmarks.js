import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

const Bookmarks = () => {
  return <Wrapper>
    <Sidebar></Sidebar>
    <div>Bookmarks</div>
  </Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
`

export default Bookmarks