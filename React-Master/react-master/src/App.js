import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"></Route>
        <Route path="/tv"></Route>
        <Route path="/search"></Route>
      </Switch>
    </Router>
  );
}

export default App;
