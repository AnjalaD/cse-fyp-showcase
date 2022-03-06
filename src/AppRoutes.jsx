import { MotionLayoutProvider } from "react-motion-layout";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";

export default function AppRoutes() {
  return (
    <Router>
      <MotionLayoutProvider>
        <Switch>
          <Route path="/project/:projectId">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MotionLayoutProvider>
    </Router>
  );
}
