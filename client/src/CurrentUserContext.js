import React from "react";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  const [tweetFeed, setTweetFeed] = React.useState(null);
  const [profileUser, setProfileUser] = React.useState(null);
  const [homeFeed, setHomeFeed] = React.useState(null);
  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  React.useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        if (status === "loading") {
          setCurrentUser(data);
          setStatus("idle");
          // fetch user feed once we know the user
          fetch(`/api/${currentUser.profile.handle}/feed`)
            .then((res) => res.json())
            .then((userFeed) => {
              setTweetFeed(userFeed);
            })
            .catch((err) => console.log(err));
          // fetch all the tweets for home feed
          fetch('/api/me/home-feed')
            .then(res => res.json())
            .then(feed => {
              setHomeFeed(feed);
            })
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        status,
        setStatus,
        tweetFeed,
        setTweetFeed,
        homeFeed,
        setHomeFeed,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const CurrentUserContext = React.createContext(null);
