import { Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Courses from './pages/Courses';

import createHistory from "history/createBrowserHistory"



function Routes() {
  const history = createHistory()
  history.listen( () => {
    window.scrollTo(0, 0)
});

  return (
    <Router history={history}>
      <Switch >
        <Route path="/" exact component={Landing} />
        <Route path="/About" exact component={AboutMe} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Courses" exact component={Courses} />
      </Switch>
    </Router>
  );
}

export default Routes;