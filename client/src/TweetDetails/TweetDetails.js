import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

const TweetDetails = () => {
  return <Wrapper>
    <Sidebar></Sidebar>
    <div>TweetDetails</div>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
`

export default TweetDetails