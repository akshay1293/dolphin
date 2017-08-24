import React, { Component } from 'react';

export default class FolderCard extends Component {
    constructor() {
        super();
        this.shortName = null;
    }
    render() {

        const folderCard = {
            border: '1px solid gray',
            display: 'flex',
            alignItems: 'space-between',
            margin: '15px 15px',
            justifyContent: 'flex-start',
            //background: '#eee',
            padding: '8px 20px',
            borderRadius: '4px',
            boxShadow: '0px 0px 4px 0px #999',
            minWidth: '120px',
            cursor: 'pointer'

        }
        this.trimName();
        return (
            <div>
                <div style={folderCard}>
                    <i className="fa fa-folder-o" style={{ fontSize: '16px', padding: '0px' }} aria-hidden="true"></i>
                    <span style={{ paddingLeft: '8px' }}>{this.shortName !== null ? this.shortName : this.props.name}</span>
                </div>
            </div>
        );
    }

    trimName() {
        if (this.props.name.length > 11) {

            this.shortName = this.props.name.substring(0, 8) + '...';
        }
    }
}