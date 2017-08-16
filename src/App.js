import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      isLoggedIn: false,
    }
  }

  componentDidMount() {
    window.gapi.signin2.render('signin-button', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      //'longtitle': false, // Default: false
      //'theme': 'light', // Default: light
      'height': 60,
      'width': 200, // Keeping aspect ratio with height (original: 36x120) (resize: 60x200)
      'onsuccess': this.onSignIn.bind(this),
    });
  }

  render() {

    if (this.state.isLoggedIn) {

      return <Dashboard />
    } else {
      return (
        <div className="container">
          <div id="signin-button" />
        </div>
      );
    }
  }

  onSignIn(user) {
    console.log(user);

    // this.setState({

    //   isLoggedIn: true,
    // })

    // var auth2 = window.gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');

    // });
  }
}

export default App;
