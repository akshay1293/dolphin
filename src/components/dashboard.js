import React, { Component } from 'react';
import Header from './header/header';
import '../App.css';


export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <div className='header'>
                    <Header user='Akshay Aggarwal' onClick={this.props.signOut} />
                </div>
                <div className='content'>

                </div>
            </div>
        );
    }
}