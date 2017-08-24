import React from 'react';
import Dolphin from '../assets/dolphin-logo.png';

class SideBar extends React.Component {
    uploadFile() {
        console.log('uploadFile; testOk');
    }
    createFolder() {
        console.log('createFolder; testOk');
    }
    render() {
        return (
            <div style={dolphin.global}>
                <div style={dolphin.bar.head}>
                    <img style={dolphin.image} src={Dolphin} alt='Dolphin' />
                </div>
                <div style={dolphin.bar.body}>
                    <Button name='Upload File' func={this.uploadFile} class='fa fa-upload' />
                    <Button name='Create Folder' func={this.createFolder} class='fa fa-plus-square' />
                    <span style={{ bottom: '16px', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', position: 'absolute' }}>All rights reserved.</span>
                </div>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <span style={dolphin.button} onClick={this.props.func}>
                <i style={dolphin.font} className={this.props.class} aria-hidden="true"></i>
                {this.props.name}
            </span>
        );
    }
}

const dolphin = {
    global: {
        alignItems: 'center',
        backgroundColor: '#34495E',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
    },
    image: {
        height: '116px'
    },
    button: {
        alignItems: 'center',
        border: '2px solid #AAA',
        borderRadius: '6px',
        color: '#EEE',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '16px',
        height: '32px',
        justifyContent: 'center',
        marginTop: '24px',
        width: '160px'
    },
    font: {
        color: '#7AD5C9',
        marginRight: '8px'
    },
    bar: {
        head: {
            alignItems: 'center',
            borderBottom: '2px solid #7AD5C9',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            width: '100%'
        },
        body: {
            alignItems: 'center',
            display: 'flex',
            flex: 4,
            flexDirection: 'column'
        }
    }
};

export default SideBar;