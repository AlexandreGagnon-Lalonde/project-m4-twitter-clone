import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../constants";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const HomeFeedForm = () => {
  const {
    currentUser,
    setNewTweet,
    newTweet,
    inputLength,
    setInputLength,
    setHomeFeed,
  } = React.useContext(CurrentUserContext);

  const [formFeedError, setFormFeedError] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({
        status: newTweet,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((state) => {
      fetch("/api/me/home-feed")
        .then((res) => res.json())
        .then((feed) => {
          setHomeFeed(feed);
        })
        .catch((err) => {
          console.log(err);
          setFormFeedError(true);
        });
    });
    // reset input field after new tweet
    document.getElementById("newTweetId").reset();
  }

  return (
    <>
      {formFeedError ? (
        <ErrorScreen></ErrorScreen>
      ) : (
        <div>
          <StyledHeader>Home</StyledHeader>
          <FormContainer>
            <StyledUserImage
              src={currentUser ? currentUser.avatarSrc : null}
            ></StyledUserImage>
            <StyledForm onSubmit={handleSubmit} id="newTweetId">
              <StyledInput
                id="tweet"
                name="tweet"
                type="textarea"
                onChange={(ev) => {
                  setNewTweet(ev.target.value);
                  setInputLength(ev.target.value.length);
                }}
                placeholder="What's happening?"
              ></StyledInput>
              <StyledSpan>
                {inputLength > 0 ? 280 - inputLength : 280}
              </StyledSpan>
              <StyledButton disabled={inputLength <= 0 || inputLength > 280}>
                Meow
              </StyledButton>
            </StyledForm>
          </FormContainer>
        </div>
      )}
    </>
  );
};

const StyledUserImage = styled.img`
  width: 50px;
  border-radius: 50%;
  margin: 10px;
  top: 0;
  left: 0;
`;
const StyledHeader = styled.h1`
  font-size: 28px;
  padding: 12px;
  border: 1px solid lightgray;
`;
const StyledInput = styled.textarea`
  height: 200px;
  flex: 1;
  border: none;
  font-size: 18px;
  padding: 23px 0 0 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
const StyledSpan = styled.span`
  font-size: 18px;
  color: lightgray;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  background-color: ${COLORS.primary};
  color: white;

  &:hover {
    opacity: 0.7;
  }
`;
const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid lightgray;
  border-top: none;
  border-bottom: 10px solid lightgray;
`;

export default HomeFeedForm;
