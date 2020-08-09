import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import HomeFeed from "./HomeFeed/HomeFeed";
import Notifications from "./Notifications/Notifications";
import Bookmarks from "./Bookmarks/Bookmarks";
import TweetDetails from "./TweetDetails/TweetDetails";
import Profile from "./Profile/Profile";

import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
