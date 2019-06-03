import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route component={Error} />
        </Switch>
      </Router>
    )
  }
}

export default App;