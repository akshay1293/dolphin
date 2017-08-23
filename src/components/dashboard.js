import React, { Component } from 'react';

import SideBar from './sideBar.js';
import Header from './header/header';
import DirHead from './header/dirHead';
import '../App.css';
import cookies from 'universal-cookie';

export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.cookie = new cookies();
    }
    render() {
        return (
            <div style={dolphin.container}>
                <div style={dolphin.sidebar}>
                    <SideBar />
                </div>
                <div style={dolphin.content}>
                    <div className='header'>
                        <Header onClick={this.props.signOut} />
                        <DirHead />
                    </div>
                    <div className='content'>
                    </div>
                </div>
            </div>
        );
    }
}

const dolphin = {
    container: {
        bottom: 0,
        display: 'flex',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    sidebar: {
        display: 'flex',
        flex: '0.15'
    },
    content: {
        display: 'flex',
        flex: '0.85',
        flexDirection: 'column'
    }
};
