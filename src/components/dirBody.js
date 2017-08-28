import React, { Component } from 'react';
import FolderCard from './folderCard';
import FileCard from './fileCard';
import cookies from 'universal-cookie';


export default class DirBody extends Component {

    constructor() {

        super();

        this.state = {
            responseJson: null,
        };
        this.cookie = new cookies();
    }

    componentDidMount() {
        fetch('http://172.18.1.147:8080/list', {
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
            })
    }

    render() {
        console.log('render');
        const style = {

            container: {
                flex: 1,
                overflowX: 'auto',

            },
            foldercontent: {

                display: 'flex',
                flexWrap: 'wrap',
                padding: '20px 80px',

            },
            filecontent: {
                display: 'flex',
                flexWrap: 'wrap',
                padding: '20px 80px'
            },
            folderText: {
                padding: '0px 30px',
                paddingTop: '36px',
                fontSize: '18px',
                fontWeight: '500px',
                color: '#6A6564  '
            },
            fileText: {
                padding: '0px 30px',
                fontSize: '18px',
                fontWeight: '500px',
                color: '#6A6564',
                marginTop: '30px'
            }

        }
        return (
            <div id="test" style={style.container}>
                <p style={style.folderText}>Folders</p>
                <div style={style.foldercontent}>
                    {this.renderFolderCards()}
                </div>
                <p style={style.fileText}>Files</p>
                <div style={style.filecontent}>
                    {this.renderFileCards()}
                </div>
            </div>
        );
    }

    renderFolderCards() {

        if (this.state.responseJson !== null) {

            return this.state.responseJson.folders.map((folder, i) => {

                return <FolderCard name={folder} onClick={this.props.clickHandler} key={i} />
            });
        }
    }

    renderFileCards() {

        if (this.state.responseJson !== null) {

            return this.state.responseJson.files.map((file, i) => {

                return <FileCard name={file} onClick={this.props.clickHandler} key={i} />
            });
        }
    }




}
