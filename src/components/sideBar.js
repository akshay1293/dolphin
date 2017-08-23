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
                <img style={dolphin.image} src={Dolphin} alt='Dolphin' />
                <hr style={dolphin.seperator} />
                <Button name='Upload File' func={this.uploadFile} class='fa fa-upload' />
                <Button name='Create Folder' func={this.createFolder} class='fa fa-plus-square' />
                <span style={{ bottom: '16px', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', position: 'absolute' }}>All rights reserved.</span>
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
        position: 'relative',
        width: '100%'
    },
    image: {
        height: '116px',
        padding: '16px 0 0 0'
    },
    seperator: {
        border: '1px solid #7AD5C9',
        margin: '16px 0 12px 0',
        width: '100%'
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
        margin: '8px',
        width: '140px'
    },
    font: {
        color: '#7AD5C9',
        marginRight: '8px'
    }
};

export default SideBar;