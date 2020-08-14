import React from "react";

import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const ProfileInfo = (props) => {
  let date = new Date(`${props.profileUser.profile.joined}`);
  // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();

  return (
    <div>
      <p>{props.profileUser.profile.displayName}</p>
      <p>@{props.profileUser.profile.handle}</p>
      <p>{props.profileUser.profile.bio}</p>
      <p>
        <GoLocation /> {props.profileUser.profile.location}
      </p>
      <p>
        <MdDateRange /> Joined {month} {year}
      </p>
      <p>{props.profileUser.profile.numFollowing} Following</p>
      <p>{props.profileUser.profile.numFollowers} Followers</p>
    </div>
  );
};

export default ProfileInfo;
