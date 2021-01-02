import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/About" exact component={AboutMe} />
        <Route path="/Projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;