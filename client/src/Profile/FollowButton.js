import React from "react";
import { useRef } from "react";

import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../constants";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const FollowButton = (props) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [followButtonError, setFollowButtonError] = React.useState(false);

  const followRef = useRef(null);

  let profileHandle = window.location.pathname.substr(1);

  function handleClick() {
    console.log("followButton", props);
    if (followRef.current.innerText === "Follow") {
      fetch(`/api/${props.profileUser.profile.handle}/follow`, {
        method: "PUT",
        body: JSON.stringify({
          status: "follow",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((state) => {
          props.setFollowingLoaded(false);
        })
        .catch((err) => {
          console.log(err);
          setFollowButtonError(true);
        });
    } else if (followRef.current.innerText === "Unfollow") {
      console.log("unfollow activated");
      fetch(`/api/${props.profileUser.profile.handle}/unfollow`, {
        method: "PUT",
        body: JSON.stringify({
          status: "unfollow",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((state) => {
          props.setFollowingLoaded(false);
        })
        .catch((err) => {
          console.log(err);
          setFollowButtonError(true);
        });
    }
  }
  return (
    <>
      {followButtonError ? (
        <>
          <ErrorScreen></ErrorScreen>
        </>
      ) : profileHandle === currentUser.handle ? null : (
        <StyledButton
          onClick={handleClick}
          disabled={profileHandle === currentUser.handle}
          ref={followRef}
        >
          {props.following.following.find(
            (user) => user["handle"] === profileHandle
          )
            ? "Unfollow"
            : "Follow"}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  bottom: -45px;
  right: 15px;
`;
export default FollowButton;
