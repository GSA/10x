import { Switch, Route } from "react-router-dom"
import Default from "./Default"
import Page from "./Page"
import Post from "./Post"
import Project from "./Project"
import Report from "./Report"

const Routes = () => (
  <Switch>
    <Route
      key="default"
      path="/"
      exact
    >
      <Default />
    </Route>
    <Route
      key="project"
      path="/projects/:name"
    >
      <Project />
    </Route>
    <Route
      key="post"
      path="/posts/:name"
    >
      <Post />
    </Route>
    <Route
      key="report"
      path="/reports/:name"
    >
      <Report />
    </Route>
    <Route
      key="page"
      path="/:name"
    >
      <Page />
    </Route>
  </Switch>
)
export default Routes
