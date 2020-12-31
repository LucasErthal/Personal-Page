import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/AboutMe" exact component={AboutMe} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;