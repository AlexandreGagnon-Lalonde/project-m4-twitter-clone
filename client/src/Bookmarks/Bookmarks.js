import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

const Bookmarks = () => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <div>Bookmarks</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;

export default Bookmarks;
