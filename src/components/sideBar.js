import React from 'react';
import Dolphin from '../assets/dolphin-logo.png';
import Cookie from 'universal-cookie';
import Config from '../config';

class SideBar extends React.Component {
    constructor() {
        super();
        this.config = new Config();
        this.cookie = new Cookie();
    }
    uploadFile(e) {
        var myForm = document.getElementById('myForm');
        let formData = new FormData(myForm);

        fetch(this.config.getUrl('upload'), {
            method: 'POST',
            body: formData
        }).then(() => {
            window.location.reload();
        });
    }
    createFolder() {
        document.getElementById('sidebar').style.filter = 'blur(2px)';
        document.getElementById('content').style.filter = 'blur(2px)';
        document.getElementById('create-popup').style.display = 'flex';
        document.getElementById('folder-name').focus();
    }

    render() {
        return (
            <div style={dolphin.global}>

                <div style={dolphin.bar.head}>
                    <img style={dolphin.image} src={Dolphin} alt='Dolphin' />
                </div>
                <div style={dolphin.bar.body}>
                    <form id='myForm'>
                        <input id="fileId" onChange={this.uploadFile.bind(this)} name="file" style={dolphin.inputfile} type="file" />
                        <label htmlFor="fileId" style={dolphin.button}>
                            <i style={dolphin.font} className='fa fa-upload' aria-hidden='true'></i>
                            Upload File
                        </label>
                        <input type="text" name="path" style={dolphin.inputfile} value={this.cookie.get('path')} readOnly />
                    </form>
                    <span style={dolphin.button} onClick={this.createFolder}>
                        <i style={dolphin.font} className='fa fa-plus-square' aria-hidden='true'></i>
                        Create Folder
                    </span>
                    <span style={{ bottom: '16px', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', position: 'absolute' }}>All rights reserved.</span>
                </div>
            </div>
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
        fontSize: '14px',
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
    },
    inputfile: {
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: '-1'
    }
};

export default SideBar;