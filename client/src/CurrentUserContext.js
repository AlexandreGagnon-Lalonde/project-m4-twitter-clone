import React from "react";

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  fetch("/api/me/profile")
    .then((res) => res.json())
    .then((data) => {
      if (status === "loading") {
        setCurrentUser(data);
        setStatus("idle");
      }
    })
    .catch((err) => console.log(err));

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const CurrentUserContext = React.createContext(null);