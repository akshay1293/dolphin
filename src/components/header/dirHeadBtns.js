import React from 'react';
import Cookie from 'universal-cookie';
import Config from '../../config';

class DirHeadBtns extends React.Component {

    constructor() {
        super();
        this.cookie = new Cookie();
        // let path = this.cookie.get('exactPath');
        // let splitPath = path.split('/');
        // let fileName = splitPath[splitPath.length - 1];
        this.state = {
            renameIcon: 'fa fa-pencil',
            // fileName: fileName
        };
        this.config = new Config();
    }

    render() {
        // return fileName;
        return (
            <div style={dolphin.container}>

                <span id="share" style={dolphin.btn}><i style={{ border: '1px solid #3333ff', borderRadius: '4px', padding: '6px' }} className="fa fa-share-alt" aria-hidden="true"></i></span>
                <span id="download" style={dolphin.btn} onClick={this.download.bind(this)}><i style={{ border: '1px solid #00cc00', borderRadius: '4px', padding: '6px' }} className="fa fa-download" aria-hidden="true"></i></span>
                <div id="input" style={dolphin.rename}>
                    <input id="filefolderrename" type="text" onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            this.toggleRename();
                        }
                    }} placeholder="Enter new filename" style={dolphin.input} />
                </div>
                <span id="rename" style={dolphin.btn} onClick={this.toggleRename.bind(this)}><i style={{ border: '1px solid #cccc00', borderRadius: '4px', padding: '6px' }} className={this.state.renameIcon} aria-hidden="true"></i></span>
                <span id="delete" style={dolphin.btn} onClick={this.delete.bind(this)}><i style={{ border: '1px solid #ff3333', borderRadius: '4px', padding: '6px' }} className="fa fa-trash" aria-hidden="true"></i></span>

            </div>
        );
    }

    download() {
        console.log(this.cookie.get('filePath'));
        fetch(this.config.getUrl('download'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                path: this.cookie.get('filePath')
            })
        });
    }

    toggleRename() {
        let btnShare = document.getElementById('share');
        let btnDownload = document.getElementById('download');
        let input = document.getElementById('input');
        let rename = document.getElementById('rename');
        if (input.style.display === 'none') {
            btnShare.style.display = 'none';
            btnDownload.style.display = 'none';
            input.style.display = 'block';
            // input.focus();

            this.setState({
                renameIcon: 'fa fa-check'
            });

            rename.style.backgroundColor = '#cccc00';
            rename.style.borderRadius = '';

            let inputBox = document.getElementById('filefolderrename');

            let path = this.cookie.get('exactPath');
            let splitPath = path.split('/');
            let fileName = splitPath[splitPath.length - 1];
            inputBox.focus();
            inputBox.value = fileName;
        } else {
            if (document.getElementById('filefolderrename').value === '') {
                btnShare.style.display = 'inline';
                btnDownload.style.display = 'inline';
                input.style.display = 'none';

                this.setState({
                    renameIcon: 'fa fa-pencil'
                });

                rename.style.backgroundColor = '#FFF';
                return false;
            }

            fetch(this.config.getUrl('rename'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: document.getElementById('filefolderrename').value,
                    path: this.cookie.get('exactPath')
                })
            }).then((response) => {
                return response.json();
            }).then((responseJSON) => {
                // console.log(responseJSON);
                btnShare.style.display = 'inline';
                btnDownload.style.display = 'inline';
                input.style.display = 'none';

                this.setState({
                    renameIcon: 'fa fa-pencil'
                });

                rename.style.backgroundColor = '#FFF';
                window.location.reload();
            });


        }
    }

    delete() {
        // console.log(this.cookie.get('exactPath'));

        fetch(this.config.getUrl('delete'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                path: this.cookie.get('exactPath')
            })
        }).then((response) => {
            return response.json();

        }).then((responseJson) => {
            // console.log(responseJson);
            window.location.reload();
        });
    }
}

const dolphin = {
    container: {
        display: 'flex'
    },
    btn: {
        color: 'rgba(0, 0, 0, 0.7)',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '0 12px'
    },
    rename: {
        // backgroundColor: '#cccc00',
        border: '1px solid #cccc00',
        borderRadius: '6px 0 0 6px',
        // boxShadow: 'rgb(153, 153, 153) 0px 0px 4px 0px',
        display: 'none',

        // position: 'absolute',
        padding: '2px',
        // right: '64px',
        // top: '60px'
    },
    input: {
        border: '0px solid #555',
        // borderRadius: '8px 8px 0 8px',
        // boxShadow: 'rgb(153, 153, 153) 0px 0px 4px 0px',
        // fontSize: '12px',
        outline: 'none',
        padding: '6px 20px',
    }
}

export default DirHeadBtns;