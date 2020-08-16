import React from "react";
import styled from "styled-components";

import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const ProfileInfo = (props) => {
  let date = new Date(`${props.profileUser.profile.joined}`);
  // https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();

  return (
    <StyledContainer>
      <StyledDisplayName>
        {props.profileUser.profile.displayName}
      </StyledDisplayName>
      <StyledHandle>
        @{props.profileUser.profile.handle}{" "}
        {props.profileUser.profile.isFollowingYou ? (
          <StyledSpan>Follows You</StyledSpan>
        ) : null}
      </StyledHandle>
      <StyledBio>{props.profileUser.profile.bio}</StyledBio>
      <InfoContainer>
        <StyledLocation>
          <GoLocation /> {props.profileUser.profile.location}
        </StyledLocation>
        <StyledDate>
          <MdDateRange /> Joined {month} {year}
        </StyledDate>
      </InfoContainer>
      <FollowDiv>
        <StyledFollowing>
          <FollowSpan>{props.profileUser.profile.numFollowing}</FollowSpan>{" "}
          Following
        </StyledFollowing>
        <StyledFollower>
          <FollowSpan>{props.profileUser.profile.numFollowers}</FollowSpan>{" "}
          Followers
        </StyledFollower>
      </FollowDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-left: 10px;
`;
const StyledDisplayName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
const StyledSpan = styled.span`
  background-color: lightgray;
  padding: 3px;
  margin: 3px;
  font-size: 12px;
  color: black;
  border-radius: 5px;
`;
const StyledHandle = styled.p`
  font-size: 12px;
  color: gray;
  margin: 4px 5px 4px 0;
`;
const StyledBio = styled.p`
  margin: 15px 0;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
const StyledLocation = styled.p`
  color: gray;
`;
const StyledDate = styled.p`
  color: gray;
`;
const StyledFollowing = styled.p`
  color: gray;
`;
const StyledFollower = styled.p`
  color: gray;
`;
const FollowSpan = styled.span`
  color: black;
`;
const FollowDiv = styled.div`
  display: flex;
  margin: 10px 0;
  width: 200px;
  justify-content: space-between;
`;

export default ProfileInfo;
