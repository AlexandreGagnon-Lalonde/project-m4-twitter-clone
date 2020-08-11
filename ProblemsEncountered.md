- Rendering the SVG icon... false alarm, my import name was not the same as the img src

- Styling the sidebar, CSS never works on the first try.
- Active state are always active on '/' if there is no EXACT before the TO in the link tag

- not sure what first step to take with the fetched data of the user
- try to fetch data in context and send it to profile to create react page from data
- import not working for some odd reason
- this line should finish with Context and the actual body should be Provider
    export const CurrentUserContext = React.createContext(null);

- trouble setting the currentUser context to the data fetched from route
  - Why does the first render doesn't work while fetching the data from the user?
  - why do we need a useEffect?

- I often start a problem, get stuck, go for another problem, come back to the first one, get stuck again, go to another one, etc...
  - my commits are usually too big imo but i'd rather that than incomplete commits

- tweet button click would activate parent anchor tag
  <!-- https://stackoverflow.com/questions/41135443/stop-event-bubbling-of-a-button-within-an-anchor-tag -->