import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import HomeRetweet from "./HomeRetweet";
import HomeTweetBio from "./HomeTweetBio";
import HomeTweetUserImage from "./HomeTweetUserImage";
import HomeTweetAuthor from "./HomeTweetAuthor";
import HomeTweetContent from "./HomeTweetContent";
import HomeTweetButton from "./HomeTweetButton";
import LoadingIcon from "../LoadingFiller/LoadingFiller";
import HomeFeedForm from "./HomeFeedForm";
import { CurrentUserContext } from "../CurrentUserContext";
// import data from "../../../server/data";

const HomeFeed = (props) => {
  const { homeFeed, currentUser } = React.useContext(CurrentUserContext);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <div>
        <HomeFeedForm></HomeFeedForm>
        <div>
          {homeFeed && currentUser ? (
            homeFeed.tweetIds.map((tweet) => {
              return (
                <StyledAnchor to={`/tweet/${tweet}`} key={tweet}>
                  <ProfileFeedContainer key={tweet}>
                    <HomeRetweet tweetId={tweet}></HomeRetweet>
                    <HomeTweetContainer>
                      <HomeTweetUserImage tweetId={tweet}></HomeTweetUserImage>
                      <HomeTweetContentContainer>
                        <HomeTweetAuthor tweetId={tweet}></HomeTweetAuthor>
                        <HomeTweetBio tweetId={tweet}></HomeTweetBio>
                        <HomeTweetContent tweetId={tweet}></HomeTweetContent>
                        <HomeTweetButton
                          tweetId={tweet}
                          tweetLike={props.tweetLike}
                          setTweetLike={props.setTweetLike}
                          retweeted={props.retweeted}
                          setRetweeted={props.setRetweeted}
                          homeFeed={homeFeed}
                        ></HomeTweetButton>
                      </HomeTweetContentContainer>
                    </HomeTweetContainer>
                  </ProfileFeedContainer>
                </StyledAnchor>
              );
            })
          ) : (
            <LoadingIcon></LoadingIcon>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;
const ProfileFeedContainer = styled.div`
  width: 1000px;
  border: 1px solid lightgray;
  border-top: none;
`;
const HomeTweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const HomeTweetContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledAnchor = styled(NavLink)`
  text-decoration: none;
`;

export default HomeFeed;
