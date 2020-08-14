import React from "react";
import styled from 'styled-components';

import Sidebar from '../Sidebar/Sidebar';

const Notifications = () => {
  return <Wrapper>
    <Sidebar></Sidebar>
    <div>Notifications</div>
  </Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
`

export default Notifications