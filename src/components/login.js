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
        if (this.cookie.get('dolphinUser') !== undefined) {

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
            'width': 255,
            'longTitle': true,
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
        this.setState({

            isLoggedIn: true,
            basicProfile: user.getBasicProfile(),
        }, () => {

            this.cookie.set('dolphinUser', this.state.basicProfile);
        });

        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        });
    }

    signOutHandler() {
        this.cookie.remove('dolphinUser');
        this.setState({ isLoggedIn: false, });
        window.location.reload();
    }
}
export default Login;
