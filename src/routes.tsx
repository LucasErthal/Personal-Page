import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Courses from './pages/Courses';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/About" exact component={AboutMe} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Courses" exact component={Courses} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;