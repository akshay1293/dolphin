import React, { Component } from 'react';
// import Button from './button';
import SideBar from './sideBar.js';

export default class Dashboard extends Component {
    render() {
        return (
            <div style={dolphin.container}>
                <div style={dolphin.sidebar}>
                    <SideBar />
                </div>
                <div style={dolphin.content}>
                    {/* <Button text='SignOut' width='80px' onClick={this.props.signOut} /> */}
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
        flex: '0.18'
    },
    content: {
        flex: '0.82'
    }
};
