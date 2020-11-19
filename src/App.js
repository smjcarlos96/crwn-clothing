import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  <div>
    <h1>HATS PAGE</h1>
  </div>
}

function App() {
  return (
    <div>
      {
        /* 
        * Link tag is similar to HTML 'a' tag with 'to' parameter as path to reach.
        * Route component is a link used by the router to a page:
        * - path will make load a route when it finds its path string in the URL.
        * - exact is a boolean. If ommited it's true by default. It's used to load only when path is strictly the same as URL parameters.
        * Switch component manages which Route should load according their paths. If Switch weren't used Routes would load sequentially.
        */
      }
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
