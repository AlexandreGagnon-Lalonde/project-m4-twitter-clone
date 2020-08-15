import React from "react";

import styled from "styled-components";

import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";
import { COLORS } from '../constants';

const HomeTweetButton = (props) => {
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("buttonclick");
  }

  return (
    <ButtonContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FaRegCommentAlt />
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <AiOutlineRetweet />
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FcLike />
        </StyledButton>
      </ButtonContainerContainer>
      <ButtonContainerContainer>
        <StyledButton onClick={handleClick}>
          <FiUpload />
        </StyledButton>
      </ButtonContainerContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: flex-start;
`;
const StyledButton = styled.button`
display: flex;
align-items: center;
  flex: 1;
  text-align: left;
  font-size: 18px;
  height: 40px;
  padding-left: 10px;
  background-color: ${COLORS.primary};
  width: 40px;
  border: none;
  border-radius: 50%;

`;
const ButtonContainerContainer = styled.div`
  width: 100%;
`


export default HomeTweetButton;
