import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login';

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
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;