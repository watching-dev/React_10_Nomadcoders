import { BrowserRouter, Switch, Route } from "react-router-dom";
import Character from "./routes/Character";
import Characters from "./routes/Characters";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
