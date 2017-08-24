import React, { Component } from 'react';
import FolderCard from './folderCard';
import FileCard from './fileCard';


export default class DirBody extends Component {

    render() {
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
                    <FolderCard name={'folder Nameaf'} onClick={this.props.clickHandler} i={1} />
                    <FolderCard name={'folder Namedfef'} onClick={this.props.clickHandler} i={2} />
                    <FolderCard name={'folder Namefaeqwf'} onClick={this.props.clickHandler} i={3} />
                </div>
                <p style={style.fileText}>Files</p>
                <div style={style.filecontent}>
                    <FileCard name={'Name'} onClick={this.props.clickHandler} />
                    <FileCard name={'Name'} onClick={this.props.clickHandler} />
                    <FileCard name={'Name'} onClick={this.props.clickHandler} />
                </div>
            </div>
        );
    }


}
