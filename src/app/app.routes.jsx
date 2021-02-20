import { NotFoundPage } from "@pages/404/404.component";
import { Route, Switch } from "react-router-dom";

export const RoutesConfig = ({ routes }) => (
  <Switch>
    {
      routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route} />)
    }
    <Route path='*'>
      <NotFoundPage />
    </Route>
  </Switch>
);

function RouteWithSubRoutes({ path, routes, component: Component}) {
  return (
    <Route
      exact
      path={path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Component {...props} routes={routes} />
      )}
    />
  );
}