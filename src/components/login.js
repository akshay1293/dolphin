import React, { Component } from 'react';
import '../App.css';
import Dashboard from './dashboard';
import cookies from 'universal-cookie';



class Login extends Component {

    constructor(props) {

        super(props);
        this.cookie = new cookies();
        this.state = {

            isLoggedIn: false,
        }


    }

    componentWillMount() {
        console.log('component will mount');
        if (this.cookie.get('name') !== undefined) {

            this.setState({

                isLoggedIn: true,
            })
        } else {

            this.setState({

                isLoggedIn: false,
            })
        }
    }

    componentDidMount() {
        window.gapi.signin2.render('signin-button', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'height': 60,
            'width': 200,
            'onsuccess': this.onSignIn.bind(this),
        });
    }

    render() {
        if (this.state.isLoggedIn) {

            return <Dashboard signOut={this.signOutHandler.bind(this)} />
        } else {
            return (
                <div className="container">
                    <div id="signin-button" />
                </div>
            );
        }
    }

    onSignIn(user) {
        var basicProfile = user.getBasicProfile();
        this.cookie.set('name', basicProfile.ig);
        this.setState({

            isLoggedIn: true,
        });

        console.log("user signing out")
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    signOutHandler() {
        this.cookie.remove('name');
        this.setState({ isLoggedIn: false, });
        window.location.reload();
    }
}
export default Login;
