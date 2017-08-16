import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.gapi.signin2.render('signin-button', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'longtitle': false,
      'theme': 'light',
      'height': 60,
      'width': 180,
      'onsuccess': this.onSignIn.bind(this),
    });
  }

  render() {
    return (
      <div className="container">
        <div id="signin-button" />
      </div>
    );
  }

  onSignIn(user) {
    console.log(user);
  }
}

export default App;
