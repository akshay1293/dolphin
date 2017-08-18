import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard';
import Login from './components/login';
import cookies from 'universal-cookie';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    );
  }
}
export default App;
