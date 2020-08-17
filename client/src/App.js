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
  const [tweetLike, setTweetLike] = React.useState(false);
  const [retweeted, setRetweeted] = React.useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeFeed
              tweetLike={tweetLike}
              setTweetLike={setTweetLike}
              retweeted={retweeted}
              setRetweeted={setRetweeted}
            />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/tweet/:tweetId">
            <TweetDetails
              tweetLike={tweetLike}
              setTweetLike={setTweetLike}
              retweeted={retweeted}
              setRetweeted={setRetweeted}
            />
          </Route>
          <Route
            path="/:profileId"
            render={(routeProps) => {
              console.log("routeP^rops", routeProps);
              return (
                <Profile
                  tweetLike={tweetLike}
                  setTweetLike={setTweetLike}
                  retweeted={retweeted}
                  setRetweeted={setRetweeted}
                  profileId={routeProps.match.params.profileId}
                />
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
