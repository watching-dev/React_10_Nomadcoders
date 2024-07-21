import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Header from "./Components/Header";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/coming-soon">
          <ComingSoon />
        </Route>
        <Route path="/now-playing">
          <NowPlaying />
        </Route>
        <Route path={["/", "/movies/:movieId"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
