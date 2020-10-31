import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import '../node_modules/bulma/css/bulma.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="container">
          <div className="has-text-centered">
            <h1 className="title is-1">Friends</h1>
          </div>
        </header>
        <div className="container">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </div>

      </div>
    </Router>
  );
};

export default App;