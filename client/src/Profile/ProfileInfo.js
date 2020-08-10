import React from "react";

import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

import { CurrentUserContext } from "../CurrentUserContext";

const ProfileInfo = () => {
  const { currentUser, profileUser } = React.useContext(CurrentUserContext);
  let date = new Date(`${profileUser.profile.joined}`);
  // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  
  return (
    <div>
      <p>{profileUser.profile.displayName}</p>
      <p>@{profileUser.profile.handle}</p>
      <p>{profileUser.profile.bio}</p>
      <p>
        <GoLocation /> {profileUser.profile.location}
      </p>
      <p>
        <MdDateRange /> Joined {month} {year}
      </p>
      <p>{profileUser.profile.numFollowing} Following</p>
      <p>{profileUser.profile.numFollowers} Followers</p>
    </div>
  );
};

export default ProfileInfo;
