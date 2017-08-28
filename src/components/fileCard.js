import React, { Component } from 'react';
import cookies from 'universal-cookie';

export default class FileCard extends Component {

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
                <div style={fileCard} onClick={this.clickHandler.bind(this)}>
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
        this.props.onClick('', filePath);
    }
}
