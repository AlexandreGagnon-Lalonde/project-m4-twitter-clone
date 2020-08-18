import React from "react";

import ErrorScreen from './ErrorScreen/ErrorScreen';

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState("null");
  const [status, setStatus] = React.useState("loading");
  const [homeFeed, setHomeFeed] = React.useState(null);
  const [newTweet, setNewTweet] = React.useState(null);
  const [inputLength, setInputLength] = React.useState(null);
  const [contextError, setContextError] = React.useState(false);
  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  React.useEffect(() => {
    if (status === "loading") {
      fetch("/api/me/profile")
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data.profile);
          setStatus("idle");
        })
        .catch((err) => {
          console.log(err);
          setContextError(true);
        });
    }
    // fetch all the tweets for home feed
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((feed) => {
        setHomeFeed(feed);
      })
      .catch((err) => {
        console.log(err);
        setContextError(true);
      });
  }, [homeFeed, status]);

  return (
    <>
      {contextError ? (
        <ErrorScreen></ErrorScreen>
      ) : (
        <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            status,
            setStatus,
            homeFeed,
            setHomeFeed,
            newTweet,
            setNewTweet,
            inputLength,
            setInputLength,
          }}
        >
          {children}
        </CurrentUserContext.Provider>
      )}
    </>
  );
};

export const CurrentUserContext = React.createContext(null);
