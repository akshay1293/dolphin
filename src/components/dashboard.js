import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import cookies from 'universal-cookie';


export default class Dashboard extends Component {

    constructor(props) {

        super(props);
        this.cookie = new cookies();
    }

    render() {

        return <div><a href="#" onClick={this.props.signOut}>signout</a></div>
    }

}