import React, { Component } from 'react';
import cookies from 'universal-cookie';

export default class FolderCard extends Component {
    constructor() {
        super();
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
                <div style={folderCard} onClick={this.onclickHandler.bind(this)} onDoubleClick={this.doubleClickHandler.bind(this)}>
                    <i className="fa fa-folder-o" style={{ fontSize: '16px', padding: '0px' }} aria-hidden="true"></i>
                    <span style={{ paddingLeft: '8px' }}>{this.shortName !== null ? this.shortName : this.props.name}</span>
                </div>
            </div>
        );
    }

    onclickHandler(e) {

    }

    doubleClickHandler(e) {
        let path = this.cookie.get('path');
        this.cookie.set('path', path + '/' + this.props.name);
        this.props.onClick(this.cookie.get('path'), '');
    }

    trimName() {
        if (this.props.name.length > 11) {

            this.shortName = this.props.name.substring(0, 8) + '...';
        }
    }
}