import React, { Component } from 'react';
import '../App.css';
import Dashboard from './dashboard';
import cookies from 'universal-cookie';
import Config from '../config';

class Login extends Component {

    constructor(props) {
        super(props);
        this.cookie = new cookies();
        this.state = {
            isLoggedIn: false,
        }
        this.config = new Config();
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
            'width': 280,
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
        this.cookie.set('dolphinUser', user.getBasicProfile());
        this.cookie.set('path', '/' + user.getBasicProfile().U3.split('@')[0]);
        this.cookie.set('folderPath', '/' + user.getBasicProfile().U3.split('@')[0]);
        this.cookie.set('filePath', '/' + user.getBasicProfile().U3.split('@')[0]);
        this.setState({

            isLoggedIn: true,
            basicProfile: user.getBasicProfile(),
        }, () => {



            fetch(this.config.getUrl('new'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    name: this.state.basicProfile.U3.split('@')[0],

                })
            }).then((response) => { return response.json() })
                .then((responseJson) => console.log(responseJson))
        });

        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        });
    }

    signOutHandler() {
        this.cookie.remove('dolphinUser');
        this.cookie.remove('path');
        this.cookie.remove('filePath');
        this.cookie.remove('folderPath');
        this.setState({ isLoggedIn: false, });
        window.location.reload();
    }
}
export default Login;
