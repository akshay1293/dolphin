import React, { Component } from 'react';
import cookies from 'universal-cookie';
import Config from '../config';

export default class DirBody extends Component {

    constructor() {

        super();

        this.state = {
            responseJson: null,
        };
        this.cookie = new cookies();
        this.config = new Config();
    }

    componentDidMount() {
        fetch(this.config.getUrl('list'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                path: this.cookie.get('path'),
            })
        }).then((response) => { return response.json() })
            .then((responseJson) => {
                this.setState({ responseJson })
                // console.log(responseJson);
            })
    }

    render() {

        const style = {

            container: {
                flex: 1,
                overflowX: 'auto',
                //zIndex: '-99',

            },
            foldercontent: {

                display: 'none',
                flexWrap: 'wrap',
                padding: '20px 80px',
            },
            filecontent: {
                display: 'none',
                flexWrap: 'wrap',
                padding: '20px 80px'
            },
            folderText: {
                padding: '0px 30px',
                paddingTop: '36px',
                fontSize: '18px',
                fontWeight: '500px',
                color: '#6A6564  ',
                display: 'none',
            },
            fileText: {
                padding: '0px 30px',
                fontSize: '18px',
                fontWeight: '500px',
                color: '#6A6564',
                marginTop: '35px',
                display: 'none'
            }

        }

        return (
            <div style={style.container}>
                <p id='folder-text' style={style.folderText}>Folders</p>
                <div id='folder-content' style={style.foldercontent}>
                    {this.renderFolderCards()}
                </div>
                <p id='file-text' style={style.fileText}>Files</p>
                <div id='file-content' style={style.filecontent}>
                    {this.renderFileCards()}
                </div>
            </div>
        );
    }

    renderFolderCards() {

        if (this.state.responseJson !== null) {
            if (this.state.responseJson.exists === true) {
                if (this.state.responseJson.folders.length !== 0) {
                    document.getElementById('folder-text').style.display = 'block';
                    document.getElementById('folder-content').style.display = 'flex';
                }
                return this.state.responseJson.folders.map((folder, i) => {

                    return <FolderCard name={folder} openFolder={this.onDoubleClick.bind(this)} onClick={this.props.clickHandler} key={i} />
                });
            }
        }
    }



    renderFileCards() {

        if (this.state.responseJson !== null) {
            if (this.state.responseJson.exists === true) {
                if (this.state.responseJson.files.length !== 0) {
                    document.getElementById('file-text').style.display = 'block';
                    document.getElementById('file-content').style.display = 'flex';
                }
                return this.state.responseJson.files.map((file, i) => {

                    return <FileCard name={file} onClick={this.props.clickHandler} key={i} />
                });
            }
        }
    }
    onDoubleClick() {

        window.location.reload();

    }
}

var oldFolderName = null;
var oldFileName = null;

/****folderCard component starts from here****/

class FolderCard extends Component {
    constructor(props) {
        super(props);
        this.shortName = null;
        this.cookie = new cookies();

    }

    render() {

        const folderCard = {
            display: 'flex',
            alignItems: 'space-between',
            margin: '15px 15px',
            justifyContent: 'flex-start',
            padding: '8px 20px',
            borderRadius: '2px',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
            minWidth: '120px',
            cursor: 'pointer'

        }
        this.trimName();
        return (
            <div>
                <div id={this.props.name} title={this.props.name} style={folderCard} onClick={this.onclickHandler.bind(this)} onDoubleClick={this.doubleClickHandler.bind(this)}>
                    <i className="fa fa-folder-o" style={{ fontSize: '16px', padding: '0px' }} aria-hidden="true"></i>
                    <span style={{ paddingLeft: '8px' }}>{this.shortName !== null ? this.shortName : this.props.name}</span>
                </div>
            </div>
        );
    }

    onclickHandler(e) {
        let path = this.cookie.get('path');
        this.cookie.set('exactPath', path + '/' + this.props.name);
        this.cookie.set('filePath', '');
        this.props.onClick(this.cookie.get('path'), '');

        if (this.props.name !== oldFolderName) {
            if (oldFileName !== null) {

                document.getElementById(oldFileName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            }
            document.getElementById(this.props.name).style.boxShadow = '0 2px 2px 0 rgb(122,213,201), 0 3px 1px -2px rgb(122,213,201), 0 1px 5px 0 rgb(122,213,201)';
            if (oldFolderName !== null) {
                document.getElementById(oldFolderName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            }
            oldFolderName = this.props.name;
        } else {
            document.getElementById(oldFolderName).style.boxShadow = '0 2px 2px 0 rgb(122,213,201), 0 3px 1px -2px rgb(122,213,201), 0 1px 5px 0 rgb(122,213,201)';
            if (oldFileName !== null) {

                document.getElementById(oldFileName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            }
        }
    }

    doubleClickHandler(e) {
        let path = this.cookie.get('path');
        this.cookie.set('path', path + '/' + this.props.name);
        this.props.onClick(this.cookie.get('path'), '');
        this.props.openFolder();
    }

    trimName() {
        if (this.props.name.length > 11) {

            this.shortName = this.props.name.substring(0, 8) + '...';
        }
    }
}


/****fileCard component starts from here****/


class FileCard extends Component {

    constructor() {
        super();
        this.shortName = null;
        this.state = {

            mouseOver: false,
        }
        this.cookie = new cookies();
    }

    render() {

        const fileCard = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px 15px',
            justifyContent: 'space-around',
            padding: '8px 32px',
            borderRadius: '2px',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
            minWidth: '96px',
            cursor: 'pointer',

        }
        this.trimName();
        return (
            <div>
                <div id={this.props.name} title={this.props.name} style={fileCard} onClick={this.clickHandler.bind(this)}>
                    <i className="fa fa-file-o" style={{ fontSize: '60px', paddingTop: '10px', color: 'rgba(0,0,0,0.6)' }} aria-hidden="true"></i>
                    <p style={{ marginTop: '25px', color: 'rgba(0,0,0,0.8)' }}>{this.shortName !== null ? this.shortName : this.props.name}</p>
                </div>
            </div>
        );
    }

    trimName() {
        if (this.props.name.length > 11) {
            this.shortName = this.props.name.substring(0, 8) + '...';
        }
    }
    clickHandler(e) {
        let path = this.cookie.get('path');
        let filePath = path + '/' + this.props.name;
        this.cookie.set('filePath', filePath);
        this.cookie.set('exactPath', filePath);
        this.props.onClick('', filePath);

        if (this.props.name !== oldFileName) {
            if (oldFolderName !== null) {

                document.getElementById(oldFolderName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            }
            document.getElementById(this.props.name).style.boxShadow = '0 2px 2px 0 rgb(122,213,201), 0 3px 1px -2px rgb(122,213,201), 0 1px 5px 0 rgb(122,213,201)';
            if (oldFileName !== null)
                document.getElementById(oldFileName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            oldFileName = this.props.name;

        } else {
            document.getElementById(oldFileName).style.boxShadow = '0 2px 2px 0 rgb(122,213,201), 0 3px 1px -2px rgb(122,213,201), 0 1px 5px 0 rgb(122,213,201)';
            if (oldFolderName !== null) {

                document.getElementById(oldFolderName).style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)';
            }
        }

    }
}

