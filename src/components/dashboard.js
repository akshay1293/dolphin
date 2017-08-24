import React, { Component } from 'react';
import DirBody from './dirBody'
import SideBar from './sideBar.js';
import Header from './header/header';
import DirHead from './header/dirHead';
import '../App.css';
import cookies from 'universal-cookie';

export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.cookie = new cookies();
        this.state = {

            path: null,
            fileName: null,
        }
    }

    componentWillMount() {


    }
    render() {

        return (
            <div style={dolphin.container}>
                <div style={dolphin.sidebar}>
                    <SideBar />
                </div>
                <div style={dolphin.content}>
                    <div className='contentTop'>
                        <Header onClick={this.props.signOut} />
                        <DirHead />
                    </div>
                    <div className='contentBottom'>
                        <DirBody clickHandler={this.clickHandler.bind(this)} />
                    </div>
                </div>
                {console.log('folder : ' + this.state.path + ' file : ' + this.state.fileName)}
            </div>
        );
    }

    clickHandler(path, fileName) {
        this.setState({ path, fileName });
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
        flex: '1'
    },
    content: {
        display: 'flex',
        flex: '5',
        flexDirection: 'column'
    },

};
