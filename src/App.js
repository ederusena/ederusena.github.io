import {
  Route,
  Switch,
  HashRouter as Router,
} from 'react-router-dom'

import { About, NotFound, Home } from './pages';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
