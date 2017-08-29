import React, { Component } from 'react';
import DirBody from './dirBody'
import SideBar from './sideBar.js';
import Header from './header/header';
import DirHead from './header/dirHead';
import '../App.css';
import cookies from 'universal-cookie';
import Config from '../config'

export default class Dashboard extends Component {

    constructor(props) {

        super(props);
        this.config = new Config();
        this.cookie = new cookies();
        this.state = {

            path: null,
            fileName: null,
        }
    }

    componentWillMount() {


    }
    cancelCreate() {
        document.getElementById('sidebar').style.filter = 'blur(0)';
        document.getElementById('content').style.filter = 'blur(0)';
        document.getElementById('create-popup').style.display = 'none';
        document.getElementById('folder-name').value = '';
    }
    okayCreate() {
        fetch(this.config.getUrl('create'), {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById('folder-name').value,
                path: this.cookie.get('path')
            })
        }).then(() => {
            document.getElementById('sidebar').style.filter = 'blur(0)';
            document.getElementById('content').style.filter = 'blur(0)';
            document.getElementById('create-popup').style.display = 'none';
            window.location.reload();
        });
    }
    render() {

        return (
            <div style={dolphin.container}>
                <div id='create-popup' style={dolphin.create.background}>
                    <div style={dolphin.create.dialog}>
                        <div style={dolphin.create.dialogFF}>New folder</div>
                        <div style={dolphin.create.dialogSF}>
                            <input id="folder-name" type='type' onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    this.okayCreate();
                                }
                            }} style={{ height: '75%', fontSize: '18px', outline: 'none', padding: '2px 8px', width: '100%' }} />
                        </div>
                        <div style={dolphin.create.dialogTF}>
                            <input type='button' style={dolphin.create.dialogCA} value='Cancel' onClick={this.cancelCreate.bind(this)} />
                            <input type='button' style={dolphin.create.dialogCR} value='Create' onClick={this.okayCreate.bind(this)} />
                        </div>
                    </div>
                </div>
                <div id="sidebar" style={dolphin.sidebar}>
                    <SideBar />
                </div>
                <div id="content" style={dolphin.content}>
                    <div className='contentTop'>
                        <Header onClick={this.props.signOut} />
                        <DirHead />
                    </div>
                    <div className='contentBottom'>
                        <DirBody clickHandler={this.clickHandler.bind(this)} />
                    </div>
                </div>
                {/* {console.log('folder : ' + this.state.path + ' file : ' + this.state.fileName)} */}
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
    create: {
        background: {
            alignItems: 'center',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            bottom: 0,
            display: 'none',
            justifyContent: 'center',
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 99
        },
        dialog: {
            backgroundColor: 'rgba(122, 213, 201, 0.7)',
            border: '3px solid rgb(100, 200, 200)',
            color: '#000',
            display: 'flex',
            flexDirection: 'column',
            height: '160px',
            padding: '0 32px',
            width: '256px'
        },
        dialogFF: {
            // border: '2px solid rgb(122, 213, 201)',
            alignItems: 'center',
            display: 'flex',
            flex: 2,
            fontSize: '24px',
            // margin: '16px 0'
        },
        dialogSF: {
            // border: '2px solid rgb(122, 213, 201)',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            flex: 1
        },
        dialogTF: {
            // border: '2px solid rgb(122, 213, 201)',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            flex: 2,
        },
        dialogCA: {
            backgroundColor: 'inherit',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            margin: '0 0 0 16px',
            outline: 'none',
            padding: '6px 12px'
        },
        dialogCR: {
            backgroundColor: '#34495E',
            border: 'none',
            color: '#FFF',
            cursor: 'pointer',
            fontSize: '18px',
            margin: '0 0 0 16px',
            outline: 'none',
            padding: '6px 12px'
        }
    }
};
