import SearchPage from "./components/SearchPage"
import GlobalStyles from "./styles/GlobalStyles"
import Champion from "./components/Champion";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
      </div>
      <Switch>
        <Route path="/champions/:champions">
          <Champion/>
        </Route>
        <Route path="/">
          <SearchPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
