import React, { Component } from 'react';
import Header from './header/header';
import '../App.css';
import cookies from 'universal-cookie';


export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.cookie = new cookies();
    }
    render() {
        return (
            <div className='dashboard'>
                <div className='header'>
                    <Header onClick={this.props.signOut} />
                </div>
                <div className='content'>

                </div>
            </div>
        );
    }
}