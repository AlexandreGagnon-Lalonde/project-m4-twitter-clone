import React from "react";

import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

import { CurrentUserContext } from "../CurrentUserContext";

const ProfileInfo = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  let date = new Date(`${currentUser.profile.joined}`);
  // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  
  return (
    <div>
      <p>{currentUser.profile.displayName}</p>
      <p>@{currentUser.profile.handle}</p>
      <p>{currentUser.profile.bio}</p>
      <p>
        <GoLocation /> {currentUser.profile.location}
      </p>
      <p>
        <MdDateRange /> Joined {month} {year}
      </p>
      <p>{currentUser.profile.numFollowing} Following</p>
      <p>{currentUser.profile.numFollowers} Followers</p>
    </div>
  );
};

export default ProfileInfo;
