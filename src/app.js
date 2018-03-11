import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  hashHistory } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return(
    <div>
      <CssBaseline />
      <Router history={hashHistory}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    </div>
  );
}

render(<App />, document.querySelector('#app'));
